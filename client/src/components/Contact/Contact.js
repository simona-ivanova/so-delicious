import styles from "./Contacts.module.css";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const form = useRef();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q1zazlo', 'template_6zcuo1n', form.current, '6MCBdOQH3KBS2NPv2')
            .then((result) => {
                setSuccess(result) 
                setError()
                e.target.reset()
                return result
            }, (error) => {
                setError(error)
                setSuccess()
                return error
            });
       
    };


    return (
        <>
            <div>
                {success && (<div className={styles["messageContainer"]}>
                    <p>Съобщението е изпратено успешно.</p>
                </div>)}

                {error && (
                    <div className={styles["errorContainer"]}>
                        <p>Неуспешно изпращане!</p>
                    </div>
                )}


                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcumb-text text-center">
                                <h2>Контакти</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles['contact-area']}>
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <div className={styles["contact-form-area"]}>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <input type="text" name="userName" className={styles["form-control"]} id="userName" placeholder="Име" required />
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <input type="email" name="userEmail" className={styles["form-control"]} id="userEmail" placeholder="Имейл" required />
                                        </div>
                                        <div className="col-12" >
                                            <textarea name="message" className={styles["form-control"]} id="message" cols="30" rows="10" placeholder="Съобщение" required></textarea>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="btn delicious-btn mt-30" type="submit">Изпрати</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className={styles['bottom-row']}>
                        <p>Свържете се с мен и в социалните мрежи:</p>
                        <div className={styles['social-info']}>
                            <a href="https://facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="https://instagram.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href="https://www.youtube.com/"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};