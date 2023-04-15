import styles from "./Home.module.css";
import CarouselFadeExample from './HomeCarousel/HomeCarousel';
import { useRecipeContext } from '../../contexts/RecipeContext';
import { LastRecipesItem } from './LastRecipesItem/LastRecipesItem';


const images = ["img/bg-img/bg1.jpg", "img/bg-img/bg6.jpg", "img/bg-img/bg7.jpg"];

export const Home = () => {

    const { recipes } = useRecipeContext();

    const lastRecipes = recipes.slice(-6).reverse();

    return (
        <>
            <div className={styles["hero-area"]}>
                <section >
                    <CarouselFadeExample images={images} />
                </section>
            </div>
            <section className="top-catagory-area section-padding-80-0">

            </section>

            <section className="best-receipe-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h3>Последно качени</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        {lastRecipes.map(x =>
                            <LastRecipesItem key={x._id} {...x} />
                        )}

                    </div>
                </div>
            </section>

        </>
    );
};

