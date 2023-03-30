export const CatalogItem = ({
    title,
    category,
    imageUrl
}) => {
    return (
        <div className="u-align-center u-container-style u-list-item u-repeater-item">
            <div className="u-container-layout u-similar-container u-container-layout-1">
                <img alt="" className="u-expanded-width u-image u-image-default u-image-1"
                    data-image-width="649"
                    data-image-height="920"
                    src={imageUrl} />
                <a href="https://nicepage.com/k/birthday-html-templates"
                    className="u-border-active-palette-2-base u-border-hover-palette-1-base u-border-none u-btn u-button-style u-none u-text-grey-40 u-text-hover-grey-15 u-btn-1"
                    data-animation-name=""
                    data-animation-duration="0"
                    data-animation-delay="0"
                    data-animation-direction="">
                    {category}
                </a>
                <a href="https://nicepage.com/k/birthday-html-templates"
                    className="u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-none u-text-body-color u-text-hover-palette-2-light-1 u-btn-2"
                    data-animation-name=""
                    data-animation-duration="0"
                    data-animation-delay="0"
                    data-animation-direction="">
                    {title}
                </a>
            </div>
        </div>
    );
};
