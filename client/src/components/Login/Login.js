import "./Login.css"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

export const Login = () => {
  const { onLoginSubmit, serverError } = useContext(AuthContext);
  const { values, changeHandler, onSubmitLogin, errors } = useForm({
    email: '',
    password: '',
  }, onLoginSubmit);


  return (

    <div className="contact-area section-padding-60">

      {serverError && (

        <div className="errorContainer">
          <p>Невалиден имейл или парола!</p>
        </div>

      )}

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h3>Вход</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">

            <div className="contact-form-area login">
              <form method="post" onSubmit={onSubmitLogin}>
                <div className="row">

                  <div className="col-12 col-lg-4">
                    <input
                      value={values.email}
                      onChange={changeHandler}
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Имейл"
                    />
                    {errors.email && <span>{errors.email}</span>}
                  </div>

                  <div className="col-12 col-lg-4">
                    <input
                      value={values.password}
                      onChange={changeHandler}
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Парола"
                    />
                    {errors.password && <span>{errors.password}</span>}
                  </div>


                  <div className="col-12 text-center">
                    <input className="btn delicious-btn mt-30" type="submit" value="Вход" />
                  </div>
                </div>
              </form>

              <div className="bottom-line-login">
                <p>Нямаш профил?</p>
                <Link to="/register">Регистрация</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};