
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

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
import { Create } from './components/Create/Create';


function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService.getAll()
      .then(result => {
        setRecipes(result)
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/catalog' element={<Catalog recipes={recipes} />} />
        <Route path='/create' element={<Create />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

      <Footer />
      <FooterBottomLine />
    </>
  );
}

export default App;
