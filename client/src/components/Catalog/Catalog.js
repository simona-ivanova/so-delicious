import { CatalogItem } from './CatalogItem/CatalogItem';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Catalog.css';
  

export const Catalog = ({
    recipes
}) => {
    const [categoryName, setCategoryName] = useState({});
    const [recipesTest, setRecepiesTest] = useState([...recipes]);
   // console.log(recipes);
    //console.log(recipesTest);
    

    // // useEffect(() => {
    // //     setRecepiesTest(...recipes);
    // //  }, []);

    // useEffect(() => {
    //    console.log(categoryName)

    //    switch (categoryName) {
    //     case 'breakfast':
    //         console.log(recipesTest.filter(x => x.categoryName === 'breakfast'))
    //       break;
        
    //     default:
    //       console.log(`Sorry, we are out of`);
    //   }
    // }, [categoryName]);
    return (
        <div>
            <div className="breadcumb-area bg-img bg-overlay" style={{ backgroundImage: `url("img/bg-img/breadcumb3.jpg")` }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcumb-text text-center">
                                <h2>Рецепти</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="receipe-post-area section-padding-40">

                <section className="best-receipe-area">
                    <div className="container">
                        <ul className="menu-categories">
                            <li><div data-to="/catalog/breakfasts" onClick={() => setCategoryName('breakfast')}>Закуски</div></li>
                            <li><div data-to="/catalog/salads"  onClick={() => setCategoryName('salads')}>Салати</div></li>
                            <li><div data-to="/catalog/soups">Супи</div></li>
                            <li><div data-to="/catalog/appetizers">Предястия</div></li>
                            <li><div data-to="/catalog/main-dishes">Основни ястия</div></li>
                            <li><div data-to="/catalog/desserts">Десерти</div></li>
                            <li><div data-to="/catalog/bread"  onClick={() => setCategoryName('bread')}>Хляб</div></li>
                        </ul>

                        <div className="row">
                            {recipes.map(x =>
                                <CatalogItem key={x._id} {...x} />
                            )}

                            {recipes.length === 0 && (
                                <div className="no-recipes">
                                    <p>No recipes yet!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}