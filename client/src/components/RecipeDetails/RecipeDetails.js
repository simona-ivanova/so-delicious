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
import { useRecipeContext } from '../../contexts/RecipeContext';

export const RecipeDetails = () => {
    const { recipeId } = useParams();
    const { isAdmin, isAuthenticated, userEmail, userFirstName } = useAuthContext();
    const { deleteRecipe } = useRecipeContext();
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
                        firstName: userFirstName,
                    }
                }
            ],
        }));

    };

    const images = [recipe.imageUrl1, recipe.imageUrl2];

    // const isOwner = recipe._ownerId === userId;

    const onDeleteClick = async () => {

        //eslint-disable-next-line no-restricted-globals
        const result = confirm(`Сигурен ли сир че искаш да изтриеш "${recipe.title}?"`);
        // showDeletedDialog(true);

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


    //     const [storageItem, setStorageItem] = useState(() => JSON.parse(localStorage.getItem("favourites") || "[]"))

    //    const isFavourited = storageItem.includes(recipe);

    //     const handleToggleFavourite = () => {

    //         if (!isFavourited) {

    //             const newStorageItem = [...storageItem, recipe]
    //             setStorageItem(newStorageItem);
    //             localStorage.setItem("favourites", JSON.stringify(newStorageItem))

    //         } else {

    //             const newStorageItem = storageItem.filter((_id) => _id !== recipeId)

    //             setStorageItem(newStorageItem);
    //             localStorage.setItem("favourites", JSON.stringify(newStorageItem))   


    //         }}

    if (recipe.steps && recipe.ingredients) {
        const ingredients = recipe.ingredients.split('\n');
        const steps = recipe.steps.split('\n');


        return (
            <>
            < div ref = { componentRef } className = "receipe-post-area section-padding-40" >
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            {isAdmin && (
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

                                        <i className="fa fa-print" aria-hidden="true" onClick={handlePrint}></i>
                                    </div>

                                    <div className="receipe-content-details">
                                        <h2>{recipe.title}</h2>
                                        <Link to={`/catalog`}> <h6>{recipe.category}</h6> </Link>
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
                            <p>Само регистрирани потребители могат да публикуват коментар.</p>}

                    </div>
                </div>
            </div>
            </>
        )
    }

}


