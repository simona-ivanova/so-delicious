import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FooterBottomLine } from "./components/FooterBottomLine";
import { RecipeCarousel } from "./components/RecipeCarousel";
import { BlogSection } from "./components/BlogSection";
import { MostLikedSection } from "./components/MostLikedSection";

function App() {
  return (
    <>
      <Header />

      <RecipeCarousel />

      <BlogSection />

      <MostLikedSection />

      <Footer />

      <FooterBottomLine /> 
    </>
  );
}

export default App;
