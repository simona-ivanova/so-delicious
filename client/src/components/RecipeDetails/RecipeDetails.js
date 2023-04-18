import { React, useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print'

import { useParams, useNavigate, Link } from 'react-router-dom';

import { recipeServiceFactory } from '../../services/recipeService';
import * as commentServise from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

import { AddComment } from '../AddComment/AddComment';
import { RecipeDetailCarousel } from './RecipeDetailCarousel/RecipeDetailCarousel';
import { Ingredients } from '../CreateRecipe/Ingredients/Ingredients';
import { Steps } from '../CreateRecipe/Steps/Steps';
import './RecipeDetails.css'
import { RecipeContext, useRecipeContext } from '../../contexts/RecipeContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const RecipeDetails = () => {
    const { recipeId } = useParams();
    const { isAdmin, userId, isAuthenticated, userEmail, userFirstName } = useAuthContext();
    const { deleteRecipe } = useRecipeContext();
    const [recipe, setRecipe] = useState({});

    const [favorites, setFavorites] = useLocalStorage('favorites', []);

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



    useEffect(() => {
        if (favorites) {
            setFavorites(favorites)
        } else {
            setFavorites([])
        }

    }, []);


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
                        firstName: userFirstName,
                    }
                }
            ],
        }));
    };



    const images = [recipe.imageUrl1, recipe.imageUrl2];



    const addFavoriteRecipe = () => {

        if (favorites.find(fav => JSON.stringify(fav) === JSON.stringify(recipe))) {
            setFavorites(favorites)
        } else {
            setFavorites([...favorites, recipe]);
        }

    }


    const isOwner = recipe._ownerId === userId;

    const onDeleteClick = async () => {

        //eslint-disable-next-line no-restricted-globals
        const result = confirm(`Сигурен ли си, че искаш да изтриеш "${recipe.title}?"`);

        if (result) {
            await recipeService.delete(recipe._id);
        }

        deleteRecipe(recipe._id);

        navigate('/catalog');
    };

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

    if (recipe.steps && recipe.ingredients) {
        const ingredients = recipe.ingredients.split('\n');
        const steps = recipe.steps.split('\n');

        return (
            <>
                < div ref={componentRef} className="receipe-post-area section-padding-40" >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">

                                {isAdmin || isOwner && (
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

                                            <i className="fa fa-print" aria-hidden="true" onClick={handlePrint}></i>
                                            <i className="fa fa-heart" aria-hidden="true" onClick={addFavoriteRecipe}></i>

                                        </div>

                                        <div className="receipe-content-details">
                                            <h2>{recipe.title}</h2>
                                        </div>

                                        <div className="receipe-duration">
                                            <h6>Подготовка: {recipe.prepTime} мин.</h6>
                                            <h6>Готвене: {recipe.cookingTime} мин.</h6>
                                            <h6>Порции: {recipe.serving}</h6>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-12 col-md-4">

                                    <RecipeDetailCarousel images={images} />

                                </div>

                            </div>
                            <div className="row details">
                                <div className="col-12 col-lg-8">
                                    <div className="steps">
                                        <h4>Стъпки:</h4>
                                        <Steps steps={steps} />
                                    </div>
                                    <div className="end">
                                        <p>Приятен апетит!</p>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <div className="ingredients">
                                        <h4>Съставки:</h4>
                                        <Ingredients ingredients={ingredients} />
                                    </div>
                                </div>
                            </div>

                            <div className="comments">
                                <h2>Коментари</h2>
                                <ul>
                                    {recipe.comments && recipe.comments.map(x => (
                                        <li key={x._id} className="comments-message">

                                            <p><strong>{x.author.firstName}</strong>: {x.comment}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {!recipe.comments?.length && (
                                <p className="no-comments">Все още няма коментари.</p>
                            )}

                            {isAuthenticated ? <AddComment onCommentSubmit={onCommentSubmit} /> :
                                <p className="only-authenticated">Само регистрирани потребители могат да публикуват коментар.</p>}

                        </div>
                    </div>
                </div>
            </>
        )
    }

}


