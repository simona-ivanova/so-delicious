import { CatalogItem } from './CatalogItem/CatalogItem';
import { Link } from 'react-router-dom';


export const Catalog = ({
    recipes
}) => {
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
                            <li><Link to="/catalog">Закуски</Link></li>
                            <li><Link to="/catalog">Салати</Link></li>
                            <li><Link to="/catalog">Супи</Link></li>
                            <li><Link to="/catalog">Предястия</Link></li>
                            <li><Link to="/catalog">Основни ястия</Link></li>
                            <li><Link to="/catalog">Десерти</Link></li>
                            <li><Link to="/catalog">Хляб</Link></li>
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