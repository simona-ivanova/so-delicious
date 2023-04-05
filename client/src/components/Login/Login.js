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

    <div className="contact-area section-padding-60">
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
            <div className="contact-form-area">
              <form method="post" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <input
                      value={values.email}
                      onChange={changeHandler}
                      name="email"
                      type="email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Имейл"
                      required
                    />
                  </div>
                  <div className="col-12 col-lg-4">
                    <input
                      value={values.password}
                      onChange={changeHandler}
                      name="password"
                      type="password"
                      min="6"
                      className="form-control"
                      placeholder="Парола"
                      required
                    />
                  </div>

                  <div className="col-12 text-center">
                    <input className="btn delicious-btn mt-30" type="submit" value="Вход" />
                  </div>
                </div>
              </form>

              <p>Нямаш профил</p>
              <Link to="/register">Регистрация</Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};