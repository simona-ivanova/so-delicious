import { useForm } from '../../hooks/useForm';

export const CreateRecipe = ({
    onCreateRecipeSubmit,
}) => {
    const {values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        time: '',
        imageUrl: '',
        steps: '',
    }, onCreateRecipeSubmit);

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Създай рецепти</h1>

                    <label htmlFor="title">Заглавие</label>
                    <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" placeholder="Enter a title..." />

                    <label htmlFor="category">Категория</label>
                    <input value={values.category} onChange={changeHandler} type="text" id="category" name="category" placeholder="Enter a category..." />

                    <label htmlFor="time">Време</label>
                    <input value={values.time} onChange={changeHandler} type="number" id="time" name="time" min="1" placeholder="1" />

                    <label htmlFor="imageUrl">Снимка</label>
                    <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="steps">Стъпки</label>
                    <textarea name="steps" id="steps" value={values.steps} onChange={changeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Създай" />
                </div>
            </form>
        </section>
    );
};
