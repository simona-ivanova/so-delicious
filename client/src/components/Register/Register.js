import './Register.css'
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
        <div className="page page-register">
            <section className="u-clearfix u-section-1" id="sec-837c">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h1 className="u-text u-text-default u-text-palette-2-light-1 u-title u-text-1">Регистрация </h1>
                    <div className="u-form u-form-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">
                        <form method='POST' onSubmit={onSubmit} className="u-clearfix u-form-spacing-18 u-form-vertical u-inner-form" name="form" style={{ padding: 18 }}>
                            <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-top u-form-group-1">
                                <label htmlFor="firstName" className="u-label u-text-palette-2-light-1 u-label-1">Име</label>
                                <input 
                                type="text" 
                                placeholder="Enter your First Name" 
                                id="firstName" 
                                name="firstName" 
                                className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-50 u-text-palette-2-light-1" 
                                required 
                                value={values.firstName}
                                onChange={changeHandler}
                                />
                            </div>
                            <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-top u-form-group-2">
                                <label htmlFor="lastName" className="u-label u-text-palette-2-light-1 u-label-2">Фамилия</label>
                                <input 
                                type="text" 
                                placeholder="Enter your Last Name" 
                                id="lastName" 
                                name="lastName" 
                                className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-50 u-text-palette-2-light-1" 
                                required
                                value={values.lastName}
                                onChange={changeHandler}
                                />
                            </div>
                            <div className="u-form-email u-form-group u-label-top u-form-group-3">
                                <label htmlFor="email" className="u-label u-text-palette-2-light-1 u-label-3">Имейл</label>
                                <input 
                                type="email" 
                                pattern="[^ @]*@[^ @]*" 
                                placeholder="Enter a valid email address" 
                                id="email" 
                                name="email" 
                                className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-50 u-text-palette-2-light-1" 
                                required
                                value={values.email}
                                onChange={changeHandler} 
                                />
                            </div>
                            <div className="u-form-group u-form-phone u-label-top u-form-group-4">
                                <label htmlFor="phoneNumber" className="u-label u-text-palette-2-light-1 u-label-4">Телефон</label>
                                <input 
                                type="text" 
                                pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" 
                                placeholder="Enter your phone (e.g. +14155552675)" 
                                id="phoneNumber" 
                                name="phoneNumber" 
                                className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-50 u-text-palette-2-light-1" 
                                required
                                value={values.phoneNumber}
                                onChange={changeHandler}
                                />
                            </div>
                            <div className="u-form-group u-form-name u-label-top u-form-group-5">
                                <label htmlFor="password" className="u-label u-text-palette-2-light-1 u-label-5">Парола</label>
                                <input 
                                type="password" 
                                placeholder="Enter your Password" 
                                id="password" 
                                name="password" 
                                className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-50 u-text-palette-2-light-1" 
                                required
                                value={values.password}
                                onChange={changeHandler}
                                />
                            </div>
                            <div className="u-form-group u-form-name u-label-top u-form-group-6">
                                <label htmlFor="repeatPassword" className="u-label u-text-palette-2-light-1 u-label-6">Повтори парола</label>
                                <input 
                                type="password" 
                                placeholder="Enter your password" 
                                id="repeatPassword" 
                                name="repeatPassword" 
                                className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-50 u-text-palette-2-light-1" 
                                required
                                value={values.repeatPassword}
                                onChange={changeHandler}
                                />
                            </div>
                            <div className="u-align-center u-form-group u-form-submit u-label-top">
                                <input 
                                type="submit" 
                                value="Създай профил" 
                                className="register-button" 
                                />
                            </div>
                            <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                            <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                            {/* <input type="hidden" value="" name="recaptchaResponse" />
                            <input type="hidden" name="formServices" value="e4a9a16928184301e069cf5ec2ea4020" /> */}
                        </form>
                    </div>
                    <p className="u-text u-text-default u-text-palette-2-light-1 u-text-2"> Вече имаш акаунт?</p>
                    <Link to="/login" className="u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-none u-text-hover-palette-2-light-2 u-text-palette-2-light-1 u-btn-2">Вход</Link>
                </div>
            </section>
        </div>

    );
};