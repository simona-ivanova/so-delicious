import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipeContext } from "../../contexts/RecipeContext";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { recipeServiceFactory } from "../../services/recipeService";

export const EditRecipe = () => {
    const { onRecipeEditSubmit } = useRecipeContext();
    const { recipeId } = useParams();
    const recipeService = useService(recipeServiceFactory);
    const { values, changeHandler, onSubmitRecipe, changeValues, errors } = useForm({
        _id: '',
        title: '',
        category: '',
        imageUrl1: '',
        imageUrl2: '',
        prepTime: '',
        cookingTime: '',
        serving: '',
        ingredients: '',
        steps: '',
    }, onRecipeEditSubmit);

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                changeValues(result);
            });
    }, [recipeId]);



    const options = ['Избери категория','Закуски', 'Салати', 'Супи', 'Предястия', 'Основни ястия', 'Десерти', 'Хляб'];

    return (

        <div className="contact-area section-padding-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h3>Редактиране</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="contact-form-area">
                            <form methd="post" onSubmit={onSubmitRecipe}>
                                <div className="row">

                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.title}
                                            onChange={changeHandler}
                                            name="title"
                                            type="text"
                                            className="form-control"
                                            placeholder="Заглавие"
                                        />
                                        {errors.title && <span>{errors.title}</span>}
                                    </div>

                                    <div className="col-12 col-lg-4">
                                    <select onChange={changeHandler} value = {values.category} className="form-control" name="category">
                                            {options.map((option, index) => {
                                                return <option key={index} >
                                                    {option}
                                                </option>
                                            })}
                                        </select>
                                        {errors.category && <span>{errors.category}</span>}
                                    </div>

                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.serving}
                                            onChange={changeHandler}
                                            name="serving"
                                            type="number"
                                            className="form-control"
                                            placeholder="Порции"
                                        />
                                        {errors.serving && <span>{errors.serving}</span>}
                                    </div>

                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.imageUrl1}
                                            onChange={changeHandler}
                                            name="imageUrl1"
                                            type="text"
                                            className="form-control"
                                            placeholder="Снимка 1"
                                        />
                                        {errors.imageUrl1 && <span>{errors.imageUrl1}</span>}
                                    </div>

                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.imageUrl2}
                                            onChange={changeHandler}
                                            name="imageUrl2"
                                            type="text"
                                            className="form-control"
                                            placeholder="Снимка 2"
                                        />
                                        {errors.imageUrl2 && <span>{errors.imageUrl2}</span>}
                                    </div>

                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.prepTime}
                                            onChange={changeHandler}
                                            name="prepTime"
                                            type="number"
                                            className="form-control"
                                            placeholder="Време за подготовка"
                                        />
                                        {errors.prepTime && <span>{errors.prepTime}</span>}
                                    </div>

                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.cookingTime}
                                            onChange={changeHandler}
                                            name="cookingTime"
                                            type="number"
                                            className="form-control"
                                            placeholder="Време за готвене"
                                        />
                                        {errors.cookingTime && <span>{errors.cookingTime}</span>}
                                    </div>

                                    <div className="col-12 col-lg-4">
                                        <textarea
                                            value={values.ingredients}
                                            onChange={changeHandler}
                                            name="ingredients"
                                            className="form-control"
                                            placeholder="Въведи всяка съставка на нов ред...">
                                        </textarea>
                                        {errors.ingredients && <span>{errors.ingredients}</span>}
                                    </div>


                                    <div className="col-12 col-lg-4">
                                        <textarea
                                            value={values.steps}
                                            onChange={changeHandler}
                                            name="steps"
                                            type="text"
                                            className="form-control"
                                            placeholder="Въведи всяка стъпка на нов ред...">
                                        </textarea>
                                        {errors.steps && <span>{errors.steps}</span>}
                                    </div>

                                    <div className="col-12 text-center">
                                        <input className="btn delicious-btn mt-30" type="submit" value="Създай" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};