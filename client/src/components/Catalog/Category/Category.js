import { Link } from "react-router-dom";

export const Category = ({
    recipes
}) => {

    return (
        <div>
            <div className="breadcumb-area bg-img bg-overlay" style={{ backgroundImage: `url("img/bg-img/breadcumb3.jpg")` }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcumb-text text-center">
                                <h2>{recipes.category}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="receipe-post-area section-padding-40">

                <section className="best-receipe-area">
                    <div className="container">

                        <div className="row">
                            {/* {recipes.map(x =>
                                <CatalogItem key={x._id} {...x} />
                            )} */}

                            {/* {recipes.length === 0 && (
                                <div className="no-recipes">
                                    <p>No recipes yet!</p>
                                </div>
                            )} */}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}