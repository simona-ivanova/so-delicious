import { useState } from 'react';

export const CreateRecipe = ({
    onCreateRecipeSubmit,
}) => {
    const [values, setValues] = useState({
        title: '',
        category: '',
        time: '',
        imageUrl: '',
        steps: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateRecipeSubmit(values);
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Създай рецепти</h1>

                    <label htmlFor="title">Заглавие</label>
                    <input value={values.title} onChange={onChangeHandler} type="text" id="title" name="title" placeholder="Enter a title..." />

                    <label htmlFor="category">Категория</label>
                    <input value={values.category} onChange={onChangeHandler} type="text" id="category" name="category" placeholder="Enter a category..." />

                    <label htmlFor="levels">Време</label>
                    <input value={values.time} onChange={onChangeHandler} type="number" id="time" name="time" min="1" placeholder="1" />

                    <label htmlFor="img">Снимка</label>
                    <input value={values.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Стъпки</label>
                    <textarea name="steps" id="summary" value={values.steps} onChange={onChangeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Създай" />
                </div>
            </form>
        </section>
    );
};
