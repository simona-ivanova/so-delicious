export const Footer = () => {
    return (
        <footer className="footer-area">

            <div className="footer-line">
            </div>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">

                        <div className="footer-social-info text-right">
                            <a href="https://facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="https://instagram.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href="https://www.youtube.com/"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                        </div>

                        <div className="footer-logo">
                            <a href="index.html"><img src="img/logo.png" alt="" /></a>
                        </div>

                        <p>Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};