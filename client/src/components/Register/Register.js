import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        repeatPassword: '',
    }, onRegisterSubmit);

    return (
        <div className="contact-area section-padding-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h3>Регистрация</h3>
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
                                            value={values.firstName}
                                            onChange={changeHandler}
                                            name="firstName"
                                            type="text"
                                            minlength="2"
                                            className="form-control"
                                            placeholder="Име"
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.email}
                                            onChange={changeHandler}
                                            name="lastName"
                                            type="text"
                                            minlength="2"
                                            className="form-control"
                                            placeholder="Фамилия"
                                            required
                                        />
                                    </div>
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
                                            value={values.phoneNumber}
                                            onChange={changeHandler}
                                            name="phoneNumber"
                                            type="tel"
                                            pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})"
                                            className="form-control"
                                            placeholder="Телефон"
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
                                    <div className="col-12 col-lg-4">
                                        <input
                                            value={values.password}
                                            onChange={changeHandler}
                                            name="repeatPassword"
                                            type="repeatPassword"
                                            className="form-control"
                                            placeholder="Повтори парола"
                                            required
                                        />
                                    </div>

                                    <div className="col-12 text-center">
                                        <input className="btn delicious-btn mt-30" type="submit" value="Регистрация" />
                                    </div>
                                </div>
                            </form>

                            <p>Вече имаш акаунт?</p>
                            <Link to="/login">Вход</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};