import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { recipeServiceFactory } from './services/recipeService';
import { AuthProvider } from './contexts/AuthContext';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
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
import { Preloader } from './components/Preloader/Preloader';
import { Search } from './components/Search/Search';
import {Helmet} from "react-helmet";


function App() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  const recipeService = recipeServiceFactory(); // auth.accessToken
  
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

  const onRecipeEditSubmit = async (values) => {
    const result = await recipeService.edit(values._id, values);

    setRecipes(state => state.map(x => x._id === values._id ? result : x));

    navigate(`/catalog/${values._id}`);
  }

  return (
    <AuthProvider>
      <Preloader />
      <Search />
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

    </AuthProvider>

  );
}

export default App;
