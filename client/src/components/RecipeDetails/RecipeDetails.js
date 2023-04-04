import './RecipeDetails.css';
import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { recipeServiceFactory } from '../../services/recipeService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';

export const RecipeDetails = () => {
    const { userId } = useContext(AuthContext);
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({});
    const recipeService = useService(recipeServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setRecipe(result);
            });
    }, [recipeId]);

    const isOwner = recipe._ownerId === userId;

    const onDeleteClick = async () => {
        // Add confirm

        await recipeService.delete(recipe._id);
        // TODO: delete from state

        navigate('/catalog');
    };

    return (
        <div className="page page-recipe-details">
            <section className="u-align-center u-clearfix u-section-1" id="sec-fa3b">
                <div className="u-clearfix u-sheet u-sheet-1">

                    <h1 className="u-align-center u-custom-font u-text u-text-font u-text-1">
                        {recipe.title}
                    </h1>
                    {isOwner && (
                        <div>
                            <button
                                className="u-border-1 u-border-palette-2-light-1 u-btn u-btn-round u-button-style u-hover-palette-2-light-1 u-radius-49 u-text-hover-white u-text-palette-2-light-1 u-white u-btn-1"
                                onClick={onDeleteClick}>
                                Изтрий
                            </button>

                            <Link to={`/catalog/${recipe._id}/edit`}
                                className="u-border-1 u-border-palette-2-light-1 u-btn u-btn-round u-button-style u-hover-palette-2-light-1 u-radius-49 u-text-hover-white u-text-palette-2-light-1 u-white u-btn-2">
                                Редактирай
                            </Link>
                        </div>
                    )}


                    <div className="u-carousel u-expanded-width-xs u-gallery u-layout-thumbnails u-lightbox u-no-transition u-show-text-always u-gallery-1" id="carousel-e131" data-interval="5000" data-u-ride="carousel">
                        <div className="u-carousel-inner u-gallery-inner" role="listbox">
                            <div className="u-active u-carousel-item u-gallery-item u-carousel-item-1">
                                <div className="u-back-slide" data-image-width="600" data-image-height="815">
                                    <img className="u-back-image u-expanded" src={recipe.imageUrl} />
                                </div>
                                {/* <div className="u-over-slide u-over-slide-1">
                                    <h3 className="u-gallery-heading">Sample Title</h3>
                                    <p className="u-gallery-text">Sample Text</p>
                                </div> */}
                            </div>
                            <div className="u-carousel-item u-gallery-item u-carousel-item-2">
                                <div className="u-back-slide" data-image-width="600" data-image-height="813">
                                    <img className="u-back-image u-expanded" src="/images/DSC409811.jpg" />
                                </div>
                                {/* <div className="u-over-slide u-over-slide-2">
                                    <h3 className="u-gallery-heading">Sample Title</h3>
                                    <p className="u-gallery-text">Sample Text</p>
                                </div> */}
                            </div>
                            <div className="u-carousel-item u-gallery-item u-carousel-item-3" data-image-width="800" data-image-height="493">
                                <div className="u-back-slide">
                                    <img className="u-back-image u-expanded" src="/images/DSC40921.jpg" />
                                </div>
                                <div className="u-over-slide u-over-slide-3">
                                    <h3 className="u-gallery-heading"></h3>
                                    <p className="u-gallery-text"></p>
                                </div>
                                <style data-mode="XL" data-visited="true"></style>
                                <style data-mode="LG" data-visited="true"></style>
                                <style data-mode="MD" data-visited="true"></style>
                                <style data-mode="SM" data-visited="true"></style>
                                <style data-mode="XS" data-visited="true"></style>
                            </div>
                        </div>
                        <a className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-1" href="#carousel-e131" role="button" data-u-slide="prev">
                            <span aria-hidden="true">
                                <svg viewBox="0 0 451.847 451.847"><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"></path></svg>
                            </span>
                            <span className="sr-only">
                                <svg viewBox="0 0 451.847 451.847"><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"></path></svg>
                            </span>
                        </a>
                        <a className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-2" href="#carousel-e131" role="button" data-u-slide="next">
                            <span aria-hidden="true">
                                <svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></svg>
                            </span>
                            <span className="sr-only">
                                <svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></svg>
                            </span>
                        </a>
                        <ol className="u-carousel-thumbnails u-spacing-10 u-carousel-thumbnails-1">
                            <li className="u-active u-carousel-thumbnail u-carousel-thumbnail-1" data-u-target="#carousel-e131" data-u-slide-to="0">
                                <img className="u-carousel-thumbnail-image u-image" src={recipe.imageUrl} />
                            </li>
                            <li className="u-carousel-thumbnail u-carousel-thumbnail-2" data-u-target="#carousel-e131" data-u-slide-to="1">
                                <img className="u-carousel-thumbnail-image u-image" src="/images/DSC409811.jpg" />
                            </li>
                            <li className="u-carousel-thumbnail u-carousel-thumbnail-3" data-u-target="#carousel-e131" data-u-slide-to="2">
                                <img className="u-carousel-thumbnail-image u-image" src="/images/DSC40921.jpg" />
                            </li>
                        </ol>
                    </div><span className="u-hover-feature u-icon u-icon-rectangle u-text-palette-2-light-1 u-icon-1" data-href="https://nicepage.com"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 49.94 49.94"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-c5c1"></use></svg><svg className="u-svg-content" viewBox="0 0 49.94 49.94" x="0px" y="0px" id="svg-c5c1"
                    // style={{enableBackground:new 0 0 49.94 49.94}}
                    >
                        <path d="M48.856,22.731c0.983-0.958,1.33-2.364,0.906-3.671c-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757
	c-0.515-0.075-0.96-0.398-1.19-0.865L28.182,3.043c-0.607-1.231-1.839-1.996-3.212-1.996c-1.372,0-2.604,0.765-3.211,1.996
	L16.352,14c-0.23,0.467-0.676,0.79-1.191,0.865L3.069,16.623C1.71,16.82,0.603,17.753,0.178,19.06
	c-0.424,1.307-0.077,2.713,0.906,3.671l8.749,8.528c0.373,0.364,0.544,0.888,0.456,1.4L8.224,44.702
	c-0.232,1.353,0.313,2.694,1.424,3.502c1.11,0.809,2.555,0.914,3.772,0.273l10.814-5.686c0.461-0.242,1.011-0.242,1.472,0
	l10.815,5.686c0.528,0.278,1.1,0.415,1.669,0.415c0.739,0,1.475-0.231,2.103-0.688c1.111-0.808,1.656-2.149,1.424-3.502
	L39.651,32.66c-0.088-0.513,0.083-1.036,0.456-1.4L48.856,22.731z M37.681,32.998l2.065,12.042c0.104,0.606-0.131,1.185-0.629,1.547
	c-0.499,0.361-1.12,0.405-1.665,0.121l-10.815-5.687c-0.521-0.273-1.095-0.411-1.667-0.411s-1.145,0.138-1.667,0.412l-10.813,5.686
	c-0.547,0.284-1.168,0.24-1.666-0.121c-0.498-0.362-0.732-0.94-0.629-1.547l2.065-12.042c0.199-1.162-0.186-2.348-1.03-3.17
	L2.48,21.299c-0.441-0.43-0.591-1.036-0.4-1.621c0.19-0.586,0.667-0.988,1.276-1.077l12.091-1.757
	c1.167-0.169,2.176-0.901,2.697-1.959l5.407-10.957c0.272-0.552,0.803-0.881,1.418-0.881c0.616,0,1.146,0.329,1.419,0.881
	l5.407,10.957c0.521,1.058,1.529,1.79,2.696,1.959l12.092,1.757c0.609,0.089,1.086,0.491,1.276,1.077
	c0.19,0.585,0.041,1.191-0.4,1.621l-8.749,8.528C37.866,30.65,37.481,31.835,37.681,32.998z"></path></svg></span>
                    <p className="u-align-center u-text u-text-palette-2-light-1 u-text-2">Добави в любими</p>
                    <p className="u-align-center u-text u-text-default u-text-palette-2-light-1 u-text-3">Принтирай</p><span className="u-file-icon u-hover-feature u-icon u-icon-2" data-href="https://nicepage.com"><img src="/images/4305625-af8642c1.png" alt="" /></span>
                    <div className="u-clearfix u-group-elements u-group-elements-1"><span className="u-file-icon u-icon u-text-palette-2-light-1 u-icon-3"><img src="/images/86093-6861043e.png" alt="" /></span>
                        <p className="u-align-center u-text u-text-palette-2-light-1 u-text-4">{recipe.time} минути</p>
                    </div>
                    <div className="u-clearfix u-group-elements u-group-elements-2"><span className="u-file-icon u-icon u-text-palette-2-light-1 u-icon-4"><img src="/images/856178-72f35e69.png" alt="" /></span>
                        <p className="u-align-center u-text u-text-palette-2-light-1 u-text-5">x порции</p>
                    </div>
                    <div className="u-container-style u-custom-color-4 u-expanded-width-xs u-group u-group-1">
                        <div className="u-container-layout u-container-layout-1">
                            <h2 className="u-align-left u-text u-text-default u-text-font u-text-6"> Необходими продукти:<span style={{ fontWeight: 700 }}></span>
                            </h2>
                            <ul className="u-align-left u-custom-list u-text u-text-font u-text-7">
                                <li>
                                    <div className="u-list-icon">
                                        <div>✔</div>
                                    </div>
                                </li>
                                <li> 1 кг. ягоди...</li>
                            </ul>
                        </div>
                    </div>
                    <h2 className="u-align-center u-text u-text-default u-text-font u-text-8" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction=""> Начин на приготвяне:</h2>
                    <ol className="u-align-left u-spacing-11 u-text u-text-9">
                        <li>{recipe.steps}</li>
                    </ol>
                    <Link to="/catalog" className="u-border-1 u-border-palette-2-light-1 u-btn u-btn-round u-button-style u-hover-palette-2-light-1 u-radius-49 u-text-hover-white u-text-palette-2-light-1 u-white u-btn-3" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">Назад</Link>
                </div>


            </section>
        </div>
    )
}