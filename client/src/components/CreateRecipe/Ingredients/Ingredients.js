export const Ingredients = (ingredients) => {

    const ingredientsArr = [ingredients.ingredients].toString().split('\n').toString().split(',');


    return (

        <ul>
            {ingredientsArr.map((ingredientsArr, index) => (
                <li key={index}>
                    <i className="fa fa-check" aria-hidden="true"></i>{ingredientsArr}
                </li>

            ))}

        </ul>
    )
};


