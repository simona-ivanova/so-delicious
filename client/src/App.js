import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { recipeServiceFactory } from './services/recipeService';
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FooterBottomLine } from "./components/FooterBottomLine/FooterBottomLine";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Catalog } from './components/Catalog/Catalog';
import { CreateRecipe } from './components/CreateRecipe/CreateRecipe';
import { RecipeDetails } from './components/RecipeDetails/RecipeDetails';
import { Profile } from './components/Profile/Profile';
import { Logout } from './components/Logout/Logout';
import { EditRecipe } from './components/EditRecipe/EditRecipe';


function App() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [auth, setAuth] = useState({});
  const recipeService = recipeServiceFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken);


  useEffect(() => {
    recipeService.getAll()
      .then(result => {
        setRecipes(result)
      });
  }, []);

  const onCreateRecipeSubmit = async (data) => {
    const newRecipe = await recipeService.create(data);

    setRecipes(state => [...state, newRecipe]);

    navigate('/catalog');
  };

  const onLoginSubmit = async (data) => {

    try {
      const result = await authService.login(data);
      setAuth(result);
      console.log(result);
      navigate('/');
    } catch (error) {
      console.log('There is a problem');
    };

  };

  const onRegisterSubmit = async (values) => {

    const { repeatPassword, ...registerData } = values;
    if (repeatPassword !== registerData.password) {
      return;
    }

    try {
      const result = await authService.register(registerData);
      setAuth(result);
      navigate('/');
    } catch (error) {
      console.log('There is a problem');
    }

  };

  const onLogout = async () => {
    await authService.logout();
    setAuth({});
  };

  const onRecipeEditSubmit = async (values) => {
    const result = await recipeService.edit(values._id, values);

    setRecipes(state => state.map(x => x._id === values._id ? result : x));

    navigate(`/catalog/${values._id}`);
  }

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    userFirstName: auth.firstName,
    isAuthenticated: !!auth.accessToken,
  };


  return (
    <AuthContext.Provider value={contextValues}>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/' element={<Profile />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/catalog' element={<Catalog recipes={recipes} />} />
        <Route path='/create' element={<CreateRecipe onCreateRecipeSubmit={onCreateRecipeSubmit} />} />
        <Route path='/catalog/:recipeId' element={<RecipeDetails />} />
        <Route path='/catalog/:recipeId/edit' element={<EditRecipe onRecipeEditSubmit={onRecipeEditSubmit} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

      <Footer />

      <FooterBottomLine />
    </AuthContext.Provider>

  );
}

export default App;
