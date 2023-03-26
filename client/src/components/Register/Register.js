import './Register.css'

export const Register = () => {
    return (
        <div className="page page-register">
        <section className="u-clearfix u-section-1" id="sec-837c">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h1 className="u-text u-text-default u-text-palette-2-light-1 u-title u-text-1">Регистрация </h1>
                <div className="u-form u-form-1" data-animation-name="" data-animation-duration="0" data-animation-delay="0" data-animation-direction="">
                    <form action="https://forms.nicepagesrv.com/v2/form/process" className="u-clearfix u-form-spacing-18 u-form-vertical u-inner-form" source="email" name="form" style={{padding: 18}}>
                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-top u-form-group-1">
                            <label for="name-6cea" className="u-label u-text-palette-2-light-1 u-label-1">Име</label>
                            <input type="text" placeholder="Enter your First Name" id="name-6cea" name="first-name" className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-50 u-text-palette-2-light-1" required="" />
                        </div>
                        <div className="u-form-group u-form-name u-form-partition-factor-2 u-label-top u-form-group-2">
                            <label for="name-6cea" className="u-label u-text-palette-2-light-1 u-label-2">Фамилия</label>
                            <input type="text" placeholder="Enter your Last Name" id="name-6cea" name="last-name" className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-50 u-text-palette-2-light-1" required="" />
                        </div>
                        <div className="u-form-email u-form-group u-label-top u-form-group-3">
                            <label for="email-9f77" className="u-label u-text-palette-2-light-1 u-label-3">Имейл</label>
                            <input type="email" placeholder="Enter a valid email address" id="email-9f77" name="email" className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-50 u-text-palette-2-light-1" required="" />
                        </div>
                        <div className="u-form-group u-form-phone u-label-top u-form-group-4">
                            <label for="phone-1e10" className="u-label u-text-palette-2-light-1 u-label-4">Телефон</label>
                            <input type="tel" pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})" placeholder="Enter your phone (e.g. +14155552675)" id="phone-1e10" name="phone" className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-50 u-text-palette-2-light-1" required="" />
                        </div>
                        <div className="u-form-group u-form-name u-label-top u-form-group-5">
                            <label for="name-838a" className="u-label u-text-palette-2-light-1 u-label-5">Парола</label>
                            <input type="text" placeholder="Enter your Password" id="name-838a" name="password" className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-50 u-text-palette-2-light-1" required="" />
                        </div>
                        <div className="u-form-group u-form-name u-label-top u-form-group-6">
                            <label for="name-ce62" className="u-label u-text-palette-2-light-1 u-label-6">Повтори парола</label>
                            <input type="text" placeholder="Enter your password" id="name-ce62" name="repeat-password" className="u-border-palette-2-light-1 u-input u-input-rectangle u-none u-radius-50 u-text-palette-2-light-1" required="" />
                        </div>
                        <div className="u-align-center u-form-group u-form-submit u-label-top">
                            <a href="#" className="u-border-1 u-border-palette-2-light-1 u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-2-light-1 u-radius-49 u-text-hover-white u-text-palette-2-light-1 u-white u-btn-1">Създай профил</a>
                            <input type="submit" value="submit" className="u-form-control-hidden" />
                        </div>
                        <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                        <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                        <input type="hidden" value="" name="recaptchaResponse" />
                            <input type="hidden" name="formServices" value="e4a9a16928184301e069cf5ec2ea4020" />
                            </form>
                        </div>
                        <p className="u-text u-text-default u-text-palette-2-light-1 u-text-2"> Вече имаш акаунт?</p>
                        <a href="Login.html" className="u-border-active-palette-2-base u-border-hover-palette-1-base u-btn u-button-style u-none u-text-hover-palette-2-light-2 u-text-palette-2-light-1 u-btn-2">Вход</a>
                </div>
        </section>
        </div>

    );
};