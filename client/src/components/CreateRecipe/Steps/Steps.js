export const Steps = (steps) => {

    const StepsArr = [steps.steps].toString().split('\n').toString().split(',');

    return (

        <ul>
            {StepsArr.map((StepsArr, index) => (
                <li key={index}>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>{StepsArr}
                </li>

            ))}

        </ul>
    )
};


