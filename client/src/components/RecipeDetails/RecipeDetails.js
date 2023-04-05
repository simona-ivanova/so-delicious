import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { recipeServiceFactory } from '../../services/recipeService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';

export const RecipeDetails = () => {
    const { userId } = useContext(AuthContext);
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({});
    const recipeService = useService(recipeServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setRecipe(result);
            });
    }, [recipeId]);

    const isOwner = recipe._ownerId === userId;

    const onDeleteClick = async () => {
        // Add confirm

        await recipeService.delete(recipe._id);
        // TODO: delete from state

        navigate('/catalog');
    };

    return (
            <div class="receipe-post-area section-padding-40">

                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="receipe-slider owl-carousel">
                                <img src="img/bg-img/bg5.jpg" alt="" />
                                <img src="img/bg-img/bg5.jpg" alt="" />
                                <img src="img/bg-img/bg5.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="receipe-content-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-8">
                                <div class="receipe-headline my-5">
                                    <div class="actions">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <i class="fa fa-print" aria-hidden="true"></i>
                                    </div>

                                    <h2>{recipe.title}</h2>
                                    <div class="receipe-duration">
                                        <h6>Време за подготовка: {recipe.prepTime} мин.</h6>
                                        <h6>Време на готвене: {recipe.cookingTime} мин.</h6>
                                        <h6>Порции: {recipe.serving}</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-md-4">
                                {isOwner && (
                                    <div class="receipe-ratings text-right my-5">
                                        <Link to={`/catalog/${recipe._id}/edit`} class="btn delicious-btn">Редактирай</Link>
                                        <button onClick={onDeleteClick} class="btn delicious-btn">Изтрий</button>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-lg-8">
                                <p>{recipe.steps}</p>
                            </div>

                            <div class="col-12 col-lg-4">
                                <div class="ingredients">
                                    <h4>Ingredients</h4>

                                    <ul>
                                        <li><i class="fa fa-check-square" aria-hidden="true"></i>{recipe.ingredients}</li>
                          
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}