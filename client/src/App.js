import { Routes, Route } from 'react-router-dom';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { FooterBottomLine } from "./components/FooterBottomLine/FooterBottomLine";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Recipes } from './components/Recipes/Recipes';
import { Create } from './components/Create/Create';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recipes' element={<Recipes />} />
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
