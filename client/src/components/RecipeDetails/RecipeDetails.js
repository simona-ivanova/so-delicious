import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './RecipeDetails.css';
import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { recipeServiceFactory } from '../../services/recipeService';
import * as commentServise from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

import { AddComment } from '../AddComment/AddComment';

export const RecipeDetails = () => {
    const { recipeId } = useParams();
    const { userId, isAuthenticated, userEmail } = useAuthContext();
    const [recipe, setRecipe] = useState({});
    const recipeService = useService(recipeServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            recipeService.getOne(recipeId),
            commentServise.getAll(recipeId)
        ]).then(([recipeData, comments]) => {
            setRecipe({
                ...recipeData,
                comments,
            });
        });
    }, [recipeId]);

    const onCommentSubmit = async (values) => {

        const response = await commentServise.create(recipeId, values.comment);

        setRecipe(state => ({
            ...state,
            comments: [
                ...state.comments,
                {
                    ...response,
                    author: {
                        email: userEmail,
                    }
                } 
            ],
        }));

    };

    const isOwner = recipe._ownerId === userId;

    const onDeleteClick = async () => {
        // Add confirm

        await recipeService.delete(recipe._id);
        // TODO: delete from state

        navigate('/catalog');
    };

    return (
        <div className="receipe-post-area section-padding-40">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    
                        {isOwner && (
                            <div className="buttons">
                                <Link to={`/catalog/${recipe._id}/edit`} className="btn delicious-btn">Редактирай</Link>
                                <button onClick={onDeleteClick} className="btn delicious-btn">Изтрий</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="receipe-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div className="receipe-headline my-5">
                                <div className="actions">
                                    <i className="fa fa-heart" aria-hidden="true"></i>
                                    <i className="fa fa-print" aria-hidden="true"></i>
                                </div>

                                <h2>{recipe.title}</h2>
                                <div className="receipe-duration">
                                    <h6>Време за подготовка: {recipe.prepTime} мин.</h6>
                                    <h6>Време на готвене: {recipe.cookingTime} мин.</h6>
                                    <h6>Порции: {recipe.serving}</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                       
                            <OwlCarousel className="receipe-slider owl-carousel owl-dots" loop margin={1} nav items={1}>
                            
                                <img src={recipe.imageUrl1} alt="" />
                                <img src={recipe.imageUrl2} alt="" />
                                <img src={recipe.imageUrl3} alt="" />
                            </OwlCarousel>
                        </div>
                    </div>
                    <img src={recipe.imageUrl1} alt="" />
                                <img src={recipe.imageUrl2} alt="" />
                                <img src={recipe.imageUrl3} alt="" />

                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <p>{recipe.steps}</p>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="ingredients">
                                <h4>Ingredients</h4>

                                <ul>
                                    <li><i className="fa fa-check-square" aria-hidden="true"></i>{recipe.ingredients}</li>

                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className="comments">
                        <h2>Коментари</h2>
                        <ul>
                            {recipe.comments && recipe.comments.map(x => (
                                <li key={x._id} className="comments-message">
                                    <p>{x.author.email} {x.comment}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {!recipe.comments?.length && (
                        <p className="no-comments">Все още няма коментари.</p>
                    )}

                    {isAuthenticated ? <AddComment onCommentSubmit={onCommentSubmit} /> :
                        <p>Само регистрирани потребители могат да публикуват коментар.</p>}

                </div>
            </div>
        </div>
    )
}