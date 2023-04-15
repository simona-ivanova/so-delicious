import './Catalog.css';
import { useRecipeContext } from '../../contexts/RecipeContext';

import { CatalogItem } from './CatalogItem/CatalogItem';

import { CategoryItem } from './Category/CategoryItem';
import { useState, useEffect } from 'react';

export const Catalog = () => {
    const { recipes } = useRecipeContext();

    const [categoryName, setCategoryName] = useState({});
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {

        switch (categoryName) {
            case 'Закуски':
                setFilteredRecipes(recipes.filter(x => x['category'] === 'Закуски'))
                break;

            case 'Салати':
                setFilteredRecipes(recipes.filter(x => x['category'] === 'Салати'))
                break;

            case 'Супи':
                setFilteredRecipes(recipes.filter(x => x['category'] === 'Супи'))
                break;

            case 'Предястия':
                setFilteredRecipes(recipes.filter(x => x['category'] === 'Предястия'))
                break;

            case 'Основни ястия':
                setFilteredRecipes(recipes.filter(x => x['category'] === 'Основни ястия'))
                break;

            case 'Десерти':
                setFilteredRecipes(recipes.filter(x => x['category'] === 'Десерти'))
                break;

            case 'Хляб':
                setFilteredRecipes(recipes.filter(x => x['category'] === 'Хляб'))
                break;

            case 'Всички':
                setFilteredRecipes([])
                break;

            default:
                setFilteredRecipes([])
        }
    }, [categoryName]);

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
                            <li><div data-is-active={categoryName == 'Всички' ? 1 : 0} onClick={() => setCategoryName('Всички')}>Всички рецепти</div></li>
                            <li><div data-is-active={categoryName == 'Закуски' ? 1 : 0} onClick={() => setCategoryName('Закуски')}>Закуски</div></li>
                            <li><div data-is-active={categoryName == 'Салати' ? 1 : 0} onClick={() => setCategoryName('Салати')}>Салати</div></li>
                            <li><div data-is-active={categoryName == 'Супи' ? 1 : 0} onClick={() => setCategoryName('Супи')}>Супи</div></li>
                            <li><div data-is-active={categoryName == 'Предястия' ? 1 : 0} onClick={() => setCategoryName('Предястия')}>Предястия</div></li>
                            <li><div data-is-active={categoryName == 'Основни ястия' ? 1 : 0} onClick={() => setCategoryName('Основни ястия')}>Основни ястия</div></li>
                            <li><div data-is-active={categoryName == 'Десерти' ? 1 : 0} onClick={() => setCategoryName('Десерти')}>Десерти</div></li>
                            <li><div data-is-active={categoryName == 'Хляб' ? 1 : 0} onClick={() => setCategoryName('Хляб')}>Хляб</div></li>
                        </ul>


                        {filteredRecipes.length === 0 && (<div className="row">
                            {recipes.map(x =>
                                <CatalogItem key={x._id} {...x} />
                            )}

                            {recipes.length === 0 && (
                                <div className="no-recipes">
                                    <p>No recipes yet!</p>
                                </div>
                            )}
                        </div>
                        )}


                        {filteredRecipes && (
                            <div className="row">
                                {filteredRecipes.map(x =>
                                    <CategoryItem key={x._id} {...x} />
                                )}
                            </div>
                        )}


                    </div>
                </section>

            </div>
        </div>
    );
}