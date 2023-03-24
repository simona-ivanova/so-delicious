import './Login.css';

export const Login = () => {
    return (
        <section className="u-clearfix u-section-1" id="sec-3b68">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-align-center u-container-style u-expanded-width-xs u-group u-radius-50 u-shape-round u-white u-group-1">
          <div className="u-container-layout u-container-layout-1">
            <h3 className="u-custom-font u-text u-text-default u-text-font u-text-palette-2-light-1 u-text-1">Вход</h3>
            <div className="u-form u-login-control u-form-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">
              <form action="#" className="u-clearfix u-form-custom-backend u-form-spacing-35 u-form-vertical u-inner-form" source="custom" name="form-2" style={{padding: 10}}>
                <div className="u-form-group u-form-name u-label-top">
                  <label for="username-708d" className="u-label u-text-palette-2-light-1 u-label-1">Имейл</label>
                  <input type="text" placeholder="Enter your Username" id="username-708d" name="username" className="u-border-palette-2-light-1 u-input u-input-rectangle u-radius-50 u-text-palette-2-light-1" required="" />
                </div>
                <div className="u-form-group u-form-password u-label-top">
                  <label for="password-708d" className="u-label u-text-palette-2-light-1 u-label-2">Парола</label>
                  <input type="text" placeholder="Enter your Password" id="password-708d" name="password" className="u-border-palette-2-light-1 u-input u-input-rectangle u-radius-50 u-text-palette-2-light-1" required="" />
                </div>
      
                <div className="u-align-center u-form-group u-form-submit u-label-top">
                  <input type="submit" value="submit" className="u-form-control-hidden" />
                  <a href="#" className="u-border-1 u-border-palette-2-light-1 u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-2-light-1 u-radius-49 u-text-hover-white u-text-palette-2-light-1 u-white u-btn-1">Вход</a>
                </div>
                <input type="hidden" value="" name="recaptchaResponse" />
              </form>
            </div>
            <a href="" className="u-border-active-palette-2-base u-border-hover-palette-1-base u-border-none u-btn u-button-style u-login-control u-login-forgot-password u-none u-text-palette-2-light-1 u-btn-2 forgot-password"><span>Забравена парола?</span></a>
          </div>
        </div>
        <p className="u-text u-text-palette-2-light-1 u-text-2"> <span style={{fontSize: 16}}></span>Нямаш профил?
        </p>
        <a href="Register.html" className="u-border-active-palette-2-base u-border-hover-palette-1-base u-border-none u-btn u-button-style u-none u-text-hover-palette-2-light-2 u-text-palette-2-light-1 u-btn-3">Регистрирай се тук</a>
      </div>
    </section>
    );
};