import styles from "./LastRecipesItem.module.css";
import { Link } from "react-router-dom";

export const LastRecipesItem = ({
    _id,
    title,
    category,
    imageUrl1
}) => {
    return (
        <div className="col-12 col-sm-6 col-lg-4">
            <div className={styles["last-recipes"]}>
            <div className="single-best-receipe-area mb-30">
                <Link to={`/catalog/${_id}`}>
                    <img src={imageUrl1} alt="" className={styles["home-img"]} />
                 
                        <div className="receipe-content">
                            <h5>{title}</h5>
                            {/* <h6>{category}</h6> */}
                        </div>
        
                </Link>
            </div>
            </div>
        </div>
    );
};
