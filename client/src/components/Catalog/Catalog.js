import { CatalogItem } from './CatalogItem/CatalogItem';
import './Catalog.css';


export const Catalog = ({
    recipes
}) => {
    return (
        <div className="page page-catalog">
            <section className="u-clearfix u-container-align-center u-section-1" id="sec-987f">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <p className="u-align-center u-text u-text-1">Add subnavigation</p>
                </div>
            </section>
            <section className="u-clearfix u-section-2" id="sec-159d">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <div className="u-expanded-width u-list u-list-1">
                        <div className="u-repeater u-repeater-1">

                            {/* <div className="u-align-center u-container-style u-list-item u-repeater-item">
                                <div className="u-container-layout u-similar-container u-container-layout-1">
                                    <img alt="" className="u-expanded-width u-image u-image-default u-image-1"
                                        data-image-width="649"
                                        data-image-height="920"
                                        src="images/DSC4560.jpg" />
                                    <a href="https://nicepage.com/k/birthday-html-templates"
                                        className="u-border-active-palette-2-base u-border-hover-palette-1-base u-border-none u-btn u-button-style u-none u-text-grey-40 u-text-hover-grey-15 u-btn-1"
                                        data-animation-name=""
                                        data-animation-duration="0"
                                        data-animation-delay="0"
                                        data-animation-direction="">
                                        Салати
                                    </a>
                                    <a href="https://nicepage.com/k/birthday-html-templates"
                                        className="u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-none u-text-body-color u-text-hover-palette-2-light-1 u-btn-2"
                                        data-animation-name=""
                                        data-animation-duration="0"
                                        data-animation-delay="0"
                                        data-animation-direction="">
                                        Цветна салата с леща
                                    </a>
                                </div>
                            </div>

                            <div className="u-align-center u-container-style u-list-item u-repeater-item">
                                <div className="u-container-layout u-similar-container u-container-layout-2">
                                    <img alt="" className="u-expanded-width u-image u-image-default u-image-2" 
                                    data-image-width="600" 
                                    data-image-height="815" 
                                    src="images/DSC40861.jpg" />
                                    <a href="https://nicepage.com/k/birthday-html-templates" 
                                    className="u-border-active-palette-2-base u-border-hover-palette-1-base u-border-none u-btn u-button-style u-none u-text-grey-40 u-text-hover-grey-15 u-btn-3" 
                                    data-animation-name="" 
                                    data-animation-duration="0" 
                                    data-animation-delay="0" 
                                    data-animation-direction="">
                                        Закуски
                                        </a>
                                    <a href="https://nicepage.com/k/birthday-html-templates" 
                                    className="u-border-active-palette-2-base u-border-hover-palette-1-base u-border-none u-btn u-button-style u-none u-text-body-color u-text-hover-palette-2-light-1 u-btn-4" 
                                    data-animation-name="" 
                                    data-animation-duration="0" 
                                    data-animation-delay="0" 
                                    data-animation-direction=""> 
                                    Бутер кифлички със сладко от ягоди
                                    </a>
                                </div>
                            </div>

                            <div className="u-align-center u-container-style u-list-item u-repeater-item">
                                <div className="u-container-layout u-similar-container u-container-layout-3">
                                    <img alt="" className="u-expanded-width u-image u-image-default u-image-3" 
                                    data-image-width="642" 
                                    data-image-height="914" 
                                    src="images/DSC_4613.JPG" />
                                    <a href="https://nicepage.com/k/birthday-html-templates" 
                                    className="u-border-active-palette-2-base u-border-hover-palette-1-base u-border-none u-btn u-button-style u-none u-text-grey-40 u-text-hover-grey-15 u-btn-5" 
                                    data-animation-name="" 
                                    data-animation-duration="0" 
                                    data-animation-delay="0" 
                                    data-animation-direction="">
                                        Хляб
                                        </a>
                                    <a href="https://nicepage.com/k/birthday-html-templates" 
                                    className="u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-none u-text-body-color u-text-hover-palette-2-light-1 u-btn-6" 
                                    data-animation-name="" 
                                    data-animation-duration="0" 
                                    data-animation-delay="0" 
                                    data-animation-direction=""> 
                                    Празнична питка
                                    </a>
                                </div>
                            </div>

                            <div className="u-align-center u-container-style u-list-item u-repeater-item">
                                <div className="u-container-layout u-similar-container u-container-layout-3">
                                    <img alt="" className="u-expanded-width u-image u-image-default u-image-3" 
                                    data-image-width="642" 
                                    data-image-height="914" 
                                    src="images/DSC_4613.JPG" />
                                    <a href="https://nicepage.com/k/birthday-html-templates" 
                                    className="u-border-active-palette-2-base u-border-hover-palette-1-base u-border-none u-btn u-button-style u-none u-text-grey-40 u-text-hover-grey-15 u-btn-5" 
                                    data-animation-name="" 
                                    data-animation-duration="0" 
                                    data-animation-delay="0" 
                                    data-animation-direction="">
                                        Хляб
                                        </a>
                                    <a href="https://nicepage.com/k/birthday-html-templates" 
                                    className="u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-none u-text-body-color u-text-hover-palette-2-light-1 u-btn-6" 
                                    data-animation-name="" 
                                    data-animation-duration="0" 
                                    data-animation-delay="0" 
                                    data-animation-direction=""> 
                                    Празнична питка
                                    </a>
                                </div>
                            </div> */}

                            {recipes.map(x =>
                                <CatalogItem key={x._id} {...x} />
                            )}

                        </div>
                    </div>
                </div>
            </section>
            {recipes.length === 0 && (
                <div className="no-recipes">
                    <p>No recipes yet!</p>
                </div>
            )}

        </div>

    );
}