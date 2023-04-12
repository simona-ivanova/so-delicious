import { Link } from "react-router-dom";

export const CategoryItem = ({
    _id,
    title,
    category,
    imageUrl1
}) => {
    return (
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-best-receipe-area mb-30">
                <Link to={`/catalog/${_id}`}>
                    <img src={imageUrl1} alt="" loading="lazy" /> </Link>

                <div className="receipe-content">
                    <Link to={`/catalog/${_id}`}> <h5>{title}</h5> </Link>
                    {/* <Link to={`/catalog/category`}> <h6>{category}</h6> </Link> */}
                </div>

            </div>
        </div>
    );
};
