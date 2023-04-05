import './Contact.css';

export const Contact = () => {
    return (
        <div className="page page-contact">
            <section className="u-align-center u-clearfix u-section-1" id="sec-e942">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-text u-text-default u-text-palette-2-light-1 u-text-1"> Свържете се с нас</h2>
                    <div className="u-form u-form-1">
                        <form action="https://forms.nicepagesrv.com/v2/form/process" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" style={{padding: 10}} source="email" name="form">
                            <div className="u-form-group u-form-name u-label-none">
                                <label htmlFor="name-3b9a" className="u-label">Name</label>
                                <input type="text" placeholder="Enter your Name" id="name-3b9a" name="name" className="u-border-palette-2-light-1 u-input u-input-rectangle u-radius-11 u-text-palette-2-light-1" required="" />
                            </div>
                            <div className="u-form-email u-form-group u-label-none">
                                <label htmlFor="email-3b9a" className="u-label">Email</label>
                                <input type="email" placeholder="Enter a valid email address" id="email-3b9a" name="email" className="u-border-palette-2-light-1 u-input u-input-rectangle u-radius-11 u-text-palette-2-light-1" required="" />
                            </div>
                            <div className="u-form-group u-form-message u-label-none">
                                <label htmlFor="message-3b9a" className="u-label">Message</label>
                                <textarea placeholder="Enter your message" rows="4" cols="50" id="message-3b9a" name="message" className="u-border-palette-2-light-1 u-input u-input-rectangle u-radius-11 u-text-palette-2-light-1" required=""></textarea>
                            </div>
                            <div className="u-align-left u-form-group u-form-submit">
                                <a href="#" className="u-border-1 u-border-palette-2-light-1 u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-2-light-1 u-radius-50 u-text-hover-white u-text-palette-2-light-1 u-white u-btn-1">Изпращане</a>
                                <input type="submit" value="submit" className="u-form-control-hidden" />
                            </div>
                            <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                            <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                            <input type="hidden" value="" name="recaptchaResponse" />
                                <input type="hidden" name="formServices" value="e4a9a16928184301e069cf5ec2ea4020" />
                                </form>
                            </div>
                            <div className="u-social-icons u-spacing-10 u-social-icons-1">
                                <a className="u-social-url" title="facebook" target="_blank" href="https://facebook.com/name"><span className="u-icon u-social-facebook u-social-icon u-text-palette-2-light-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-5a72"></use></svg><svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-5a72"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
      c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"></path></svg></span>
                                </a>
                                <a className="u-social-url" title="instagram" target="_blank" href="https://www.instagram.com/name"><span className="u-icon u-social-icon u-social-instagram u-text-palette-2-light-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-54fc"></use></svg><svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-54fc"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
      z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"></path><path fill="#FFFFFF" d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"></path><path fill="#FFFFFF" d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
      C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
      c5.5,0,9.9,4.5,9.9,9.9V73.3z"></path></svg></span>
                                </a>
                                <a className="u-social-url" title="youtube" target="_blank" href=""><span className="u-icon u-social-icon u-social-youtube u-text-palette-2-light-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-191c"></use></svg><svg className="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-191c"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M74.9,33.3H37.3c-7.4,0-13.4,6-13.4,13.4v18.8c0,7.4,6,13.4,13.4,13.4h37.6c7.4,0,13.4-6,13.4-13.4V46.7 C88.3,39.3,82.3,33.3,74.9,33.3L74.9,33.3z M65.9,57l-17.6,8.4c-0.5,0.2-1-0.1-1-0.6V47.5c0-0.5,0.6-0.9,1-0.6l17.6,8.9 C66.4,56,66.4,56.8,65.9,57L65.9,57z"></path></svg></span>
                                </a>
                            </div>
                    </div>
            </section>

        </div>
    );
};