export const Steps = (steps) => {

    return (

        <ul>
            {steps.steps.map((steps, index) => (
                <li key={index}>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>{steps}
                </li>

            ))}

        </ul>
    )
};


