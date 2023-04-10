export const Ingredients = (ingredients) => {

    return (

        <ul>
            {ingredients.ingredients.map((ingredients, index) => (
                <li key={index}>
                    <i className="fa fa-check" aria-hidden="true"></i>{ingredients}
                </li>

            ))}

        </ul>
    )
};


