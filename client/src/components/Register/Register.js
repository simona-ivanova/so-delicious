import styles from './Register.module.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmitRegister, errors } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
    }, onRegisterSubmit);


    return (
        <div className="contact-area section-padding-60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles["section-heading"]}>
                            <h3>Регистрация</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className={styles["contact-form-area"]}>
                            <form method="post" onSubmit={onSubmitRegister}>
                                <div className={styles["row"]}>
                                    <div className={styles["col-12"]}>
                                        <input
                                            value={values.firstName}
                                            onChange={changeHandler}
                                            name="firstName"
                                            type="text"
                                            className={styles["form-control"]}
                                            placeholder="Име"
                                        />
                                        {errors.firstName && <span>{errors.firstName}</span>}

                                    </div>
                                    <div className={styles["col-12"]}>
                                        <input
                                            value={values.lastName}
                                            onChange={changeHandler}
                                            name="lastName"
                                            type="text"
                                            className={styles["form-control"]}
                                            placeholder="Фамилия"
                                        />
                                        {errors.lastName && <span>{errors.lastName}</span>}
                                    </div>
                                    <div className={styles["col-12"]}>
                                        <input
                                            value={values.email}
                                            onChange={changeHandler}
                                            name="email"
                                            type="email"
                                            className={styles["form-control"]}
                                            placeholder="Имейл"
                                        />
                                        {errors.email && <span>{errors.email}</span>}
                                    </div>
                                    <div className={styles["col-12"]}>
                                        <input
                                            value={values.password}
                                            onChange={changeHandler}
                                            name="password"
                                            type="password"
                                            className={styles["form-control"]}
                                            placeholder="Парола"
                                        />
                                        {errors.password && <span>{errors.password}</span>}
                                        {errors.repeatPassword && <span>{errors.repeatPassword}</span>}
                                    </div>
                                    <div className={styles["col-12"]}>
                                        <input
                                            value={values.repeatPassword}
                                            onChange={changeHandler}
                                            name="repeatPassword"
                                            type="password"
                                            className={styles["form-control"]}
                                            placeholder="Повтори парола"
                                        />
                                        {errors.repeatPassword && <span>{errors.repeatPassword}</span>}
                                    </div>

                                    <div className="col-12 text-center">
                                        <input className="btn delicious-btn mt-30" type="submit" value="Регистрация" />
                                    </div>
                                </div>
                            </form>

                            <div className={styles["bottom-line-register"]}>
                                <p>Вече имаш акаунт?</p>
                                <Link to="/login">Вход</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};