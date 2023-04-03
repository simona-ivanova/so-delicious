import './Login.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
  }, onLoginSubmit);

  return (
    <div className="page page-login">
      <section className="u-clearfix u-section-1" id="sec-3b68">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-align-center u-container-style u-expanded-width-xs u-group u-radius-50 u-shape-round u-white u-group-1">
            <div className="u-container-layout u-container-layout-1">
              <h3 className="u-custom-font u-text u-text-default u-text-font u-text-palette-2-light-1 u-text-1">Вход</h3>
              <div className="u-form u-login-control u-form-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">
                <form method='POST' onSubmit={onSubmit}
                  className="u-clearfix u-form-custom-backend u-form-spacing-35 u-form-vertical u-inner-form"
                  name="form"
                  style={{ padding: 10 }}>
                  <div className="u-form-group u-form-name u-label-top">
                    <label htmlFor="email" className="u-label u-text-palette-2-light-1 u-label-1">Имейл</label>
                    <input
                      type="email"
                      pattern="[^ @]*@[^ @]*"
                      placeholder="Enter your Email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={changeHandler}
                      className="u-border-palette-2-light-1 u-input u-input-rectangle u-radius-50 u-text-palette-2-light-1"
                      required
                    />
                  </div>
                  <div className="u-form-group u-form-password u-label-top">
                    <label htmlFor="password" className="u-label u-text-palette-2-light-1 u-label-2">Парола</label>
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      id="password"
                      name="password"
                      value={values.password}
                      onChange={changeHandler}
                      className="u-border-palette-2-light-1 u-input u-input-rectangle u-radius-50 u-text-palette-2-light-1"
                      required
                    />
                  </div>

                  <div className="u-align-center u-form-group u-form-submit u-label-top">
                    <input type="submit" value="вход" className="login-button" />
                  </div>

                  {/* <input type="hidden" value="" name="recaptchaResponse" /> */}

                </form>
              </div>
              <a href="" className="u-border-active-palette-2-base u-border-hover-palette-1-base u-border-none u-btn u-button-style u-login-control u-login-forgot-password u-none u-text-palette-2-light-1 u-btn-2 forgot-password"><span>Забравена парола?</span></a>
            </div>
          </div>
          <p className="u-text u-text-palette-2-light-1 u-text-2"> <span style={{ fontSize: 16 }}></span>Нямаш профил?
          </p>
          <Link to="/register" className="u-border-active-palette-2-base u-border-hover-palette-1-base u-border-none u-btn u-button-style u-none u-text-hover-palette-2-light-2 u-text-palette-2-light-1 u-btn-3">Регистрирай се тук</Link>
        </div>
      </section>
    </div>
  );
};