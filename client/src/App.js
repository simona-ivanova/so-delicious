import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { RecipeProvider } from './contexts/RecipeContext';

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
import { ProfileEdit } from './components/Profile/ProdileEdit/ProfileEdit'
import { Logout } from './components/Logout/Logout';
import { EditRecipe } from './components/EditRecipe/EditRecipe';
// import { Preloader } from './components/Preloader/Preloader';
import { Search } from './components/Search/Search';
import { RouteGuard } from './components/common/RouteGuard';
import { RecipeOwner } from './components/common/RecipeOwner';

// import { Category } from './components/Catalog/Category/Category';
// import { authServiceFactory } from './services/authService';
// import { FavouritesList } from './components/FavouritesList/FavouritesList';

function App() {

  // const [favorites, setFavorites] = useState([]);

  // const addToFavorite = (recipe) => {

  // setFavorites(state => [state, recipe]);
  // }


  // const onProfileEditSubmit = async (values) => {
  //   const result = await authServiceFactory.edit(values._id, values);

  //   setRecipes(state => state.map(x => x._id === values._id ? result : x));

  //   navigate(`/catalog/${values._id}`);
  // }

  return (
    <AuthProvider>
      <RecipeProvider>
        {/* <Preloader /> */}
        <Search />
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile/' element={<Profile />} />
          <Route path='/profile/:userId/edit' element={<ProfileEdit />} />
          {/* <Route path='/profile/:userId/favouriteList' element={<FavouritesList recipes={recipes}/>} /> */}
          <Route path='/logout' element={<Logout />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:recipeId' element={<RecipeDetails />} />
          <Route element={<RouteGuard />}>
            <Route path='/catalog/:recipeId/edit' element={
              <RecipeOwner>
                <EditRecipe />
              </RecipeOwner>
            } />
            <Route path='/create' element={<CreateRecipe />} />
          </Route>

          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/catalog/:category' element={<Category recipes={recipes}/>} /> */}
        </Routes>

        <Footer />
      </RecipeProvider>
    </AuthProvider>

  );
}

export default App;
