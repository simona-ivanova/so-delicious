export const Contact = () => {
    return (
       
        <div className="contact-area section-padding-0-80">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h3>Свържете се с нас</h3>
                        </div>
                    </div>
                </div>
    
                <div className="row">
                    <div className="col-12">
                        <div className="contact-form-area">
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <input type="text" className="form-control" id="name" placeholder="Име" />
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <input type="email" className="form-control" id="email" placeholder="Имейл" />
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="10" placeholder="Съобщение"></textarea>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="btn delicious-btn mt-30" type="submit">Изпрати</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-info">
                <a href="https://facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://instagram.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.youtube.com/"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
              </div>
        </div>

    );
};