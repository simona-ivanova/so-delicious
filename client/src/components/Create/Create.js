import './Create.css';

export const Create = () => {
    return (
    <div className="page page-create">
        <section className="u-clearfix u-section-1" id="sec-3c2d">
      <div className="u-clearfix u-sheet u-sheet-1">
        <h2 className="u-text u-text-default u-text-palette-2-light-1 u-text-1"> Създ​аване на рецепта </h2>
        <div className="u-expanded-width-sm u-expanded-width-xs u-form u-form-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">
          <form action="https://forms.nicepagesrv.com/v2/form/process" className="u-clearfix u-form-spacing-22 u-form-vertical u-inner-form" style={{padding: 15}} source="email" name="form">
            <div className="u-form-group u-form-name u-label-top u-form-group-1">
              <label htmlFor="name-3b9a" className="u-label u-text-palette-2-light-1 u-label-1">Заглавие</label>
              <input type="text" placeholder="Enter a title" id="name-3b9a" name="title" className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1" required="" />
            </div>
            <div className="u-form-group u-form-url u-label-top u-form-group-2">
              <label htmlFor="url-d7b8" className="u-label u-text-palette-2-light-1 u-label-2">Снимка</label>
              <input type="url" pattern="^((https?|ftp)://)?[^\s/$.?#]*\.[^\s]*$" placeholder="Enter your image" id="url-d7b8" name="image-url" className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1" required="" />
            </div>
            <div className="u-form-group u-form-number u-form-number-layout-number u-form-partition-factor-2 u-label-top u-form-group-3">
              <label htmlFor="number-1622" className="u-label u-text-palette-2-light-1 u-label-3">Време на приготвяне (мин.)</label>
              <div className="u-input-row" data-value="0">
                <input value="0" min="0" max="100" step="1" type="number" placeholder="" id="number-1622" name="cooking-time" className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1" />
              </div>
            </div>
            <div className="u-form-group u-form-number u-form-number-layout-number u-form-partition-factor-2 u-label-top u-form-group-4">
              <label htmlFor="number-3d14" className="u-label u-text-palette-2-light-1 u-label-4">Порции</label>
              <div className="u-input-row" data-value="0">
                <input value="0" min="0" max="100" step="1" type="number" placeholder="" id="number-3d14" name="serving" className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1" />
              </div>
            </div>
            <div className="u-form-group u-form-textarea u-label-top u-form-group-5">
              <label htmlFor="textarea-1f45" className="u-label u-text-palette-2-light-1 u-label-5">Продукти</label>
              <textarea rows="4" cols="50" id="textarea-1f45" name="ingredients" className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1" required=""></textarea>
            </div>
            <div className="u-form-group u-form-textarea u-label-top u-form-group-6">
              <label htmlFor="textarea-341b" className="u-label u-text-palette-2-light-1 u-label-6">Стъпки</label>
              <textarea rows="4" cols="50" id="textarea-341b" name="steps" className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-14 u-text-palette-2-light-1" required=""></textarea>
            </div>
            <div className="u-align-left u-form-group u-form-submit u-label-top u-form-group-7">
              <a href="#" className="u-border-1 u-border-palette-2-light-1 u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-2-light-1 u-radius-50 u-text-hover-white u-text-palette-2-light-1 u-white u-btn-1">създай</a>
              <input type="submit" value="submit" className="u-form-control-hidden" />
            </div>
            <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
            <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
            <input type="hidden" value="" name="recaptchaResponse" />
            <input type="hidden" name="formServices" value="e4a9a16928184301e069cf5ec2ea4020" />
          </form>
        </div>
      </div>
    </section>
    
    
    <footer className="u-align-center-md u-align-center-sm u-align-center-xs u-clearfix u-custom-color-4 u-footer" id="sec-0f74"><div className="u-clearfix u-sheet u-sheet-1">
        <a href="https://nicepage.com" className="u-image u-logo u-image-1" data-image-width="352" data-image-height="202">
          <img src="images/logo.png" className="u-logo-image u-logo-image-1"/>
        </a>
        <div className="u-align-left u-social-icons u-spacing-10 u-social-icons-1">
          <a className="u-social-url" title="facebook" target="_blank" href="https://facebook.com/name"><span className="u-icon u-social-facebook u-social-icon u-text-palette-2-light-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-5b85"></use></svg><svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-5b85"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
      c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"></path></svg></span>
          </a>
          <a className="u-social-url" title="instagram" target="_blank" href="https://www.instagram.com/name"><span className="u-icon u-social-icon u-social-instagram u-text-palette-2-light-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-f25e"></use></svg><svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-f25e"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
      z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"></path><path fill="#FFFFFF" d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"></path><path fill="#FFFFFF" d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
      C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
      c5.5,0,9.9,4.5,9.9,9.9V73.3z"></path></svg></span>
          </a>
          <a className="u-social-url" title="youtube" target="_blank" href=""><span className="u-icon u-social-icon u-social-youtube u-text-palette-2-light-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-144b"></use></svg><svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-144b"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M74.9,33.3H37.3c-7.4,0-13.4,6-13.4,13.4v18.8c0,7.4,6,13.4,13.4,13.4h37.6c7.4,0,13.4-6,13.4-13.4V46.7 C88.3,39.3,82.3,33.3,74.9,33.3L74.9,33.3z M65.9,57l-17.6,8.4c-0.5,0.2-1-0.1-1-0.6V47.5c0-0.5,0.6-0.9,1-0.6l17.6,8.9 C66.4,56,66.4,56.8,65.9,57L65.9,57z"></path></svg></span>
          </a>
        </div>
        <p className="u-align-center-lg u-align-center-md u-align-center-xl u-text u-text-1"> ©2023 by Si​​mona I​vanova</p>
      </div></footer>
    <section className="u-backlink u-clearfix u-grey-80">
      <a className="u-link" href="https://nicepage.com/website-templates" target="_blank">
        <span>Website Templates</span>
      </a>
      <p className="u-text">
        <span>created with</span>
      </p>
      <a className="u-link" href="" target="_blank">
        <span>Website Builder Software</span>
      </a>. 
    </section>

    </div>
)
};