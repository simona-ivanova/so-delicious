
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as recipeService from './services/recipeService';

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


function App() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService.getAll()
      .then(result => {
        setRecipes(result)
      });
  }, []);

  const onCreateRecipeSubmit = async (data) => {
    const newRecipe = await recipeService.create(data);

    // TODO: add to state
    setRecipes(state => [...state, newRecipe]);

    //TODO: redirect to catalog
    navigate('/catalog');
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/catalog' element={<Catalog recipes={recipes} />} />
        <Route path='/create' element={<CreateRecipe onCreateRecipeSubmit={onCreateRecipeSubmit} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/catalog/:recipeId' element={<RecipeDetails />} />
      </Routes>

      <Footer />

      <FooterBottomLine />
    </>
  );
}

export default App;
