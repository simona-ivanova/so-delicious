import { useForm } from '../../hooks/useForm';

export const CreateRecipe = ({
    onCreateRecipeSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        imageUrl1: '',
        imageUrl2: '',
        imageUrl3: '',
        prepTime: '',
        cookingTime: '',
        serving: '',
        ingredients: '',
        steps: '',
    }, onCreateRecipeSubmit);

    const options = ['Закуски', 'Салати', 'Супи', 'Предястия', 'Основни ястия', 'Десерти', 'Хляб'];

    return (

        <div className="contact-area section-padding-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h3>Създай рецепта</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="contact-form-area">
                            <form onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.title}
                                            onChange={changeHandler}
                                            name="title"
                                            type="text"
                                            className="form-control"
                                            placeholder="Заглавие"
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <select onChange={changeHandler} className="form-control" name="category" required>
                                            <option>Избери категория</option>
                                            {options.map((option, index) => {
                                                return <option key={index} >
                                                    {option}
                                                </option>
                                            })}
                                        </select>
                                    </div>
                                                  
                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.serving}
                                            onChange={changeHandler}
                                            name="serving"
                                            type="number"
                                            className="form-control"
                                            placeholder="Порции"
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.imageUrl1}
                                            onChange={changeHandler}
                                            name="imageUrl1"
                                            type="text"
                                            className="form-control"
                                            placeholder="Снимка 1"
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.imageUrl2}
                                            onChange={changeHandler}
                                            name="imageUrl2"
                                            type="text"
                                            className="form-control"
                                            placeholder="Снимка 2"
                                            required
                                        />
                                    </div>

                                    
                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.imageUrl3}
                                            onChange={changeHandler}
                                            name="imageUrl3"
                                            type="text"
                                            className="form-control"
                                            placeholder="Снимка 3"
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.prepTime}
                                            onChange={changeHandler}
                                            name="prepTime"
                                            type="number"
                                            className="form-control"
                                            placeholder="Време за подготовка"
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.cookingTime}
                                            onChange={changeHandler}
                                            name="cookingTime"
                                            type="number"
                                            className="form-control"
                                            placeholder="Време на готвене"
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.ingredients}
                                            onChange={changeHandler}
                                            name="ingredients"
                                            type="text"
                                            className="form-control"
                                            placeholder="Съставки"
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.steps}
                                            onChange={changeHandler}
                                            name="steps"
                                            type="text"
                                            className="form-control"
                                            placeholder="Стъпки"
                                            required
                                        />
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
