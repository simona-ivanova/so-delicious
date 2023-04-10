import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer-area">

            <div className="follow-us-instagram">
                <div className="container">
                    <div className="row">
                    </div>
                </div>

                <div className="insta-feeds d-flex flex-wrap">

                    <div className="single-insta-feeds">
                        <Link to="/catalog/4a58a937-a2d0-4a54-aecb-455704a16246">
                            <img src="https://donevatania.com/wp-content/uploads/2016/05/38.jpg" alt="" />
                        </Link>
                    </div>

                    <div className="single-insta-feeds">
                        <Link to="/catalog/2a58a937-a2d0-4a54-aecb-455704a16249">
                            <img src="https://donevatania.com/wp-content/uploads/2022/06/DSC42721.jpg" alt="" />
                        </Link>
                    </div>

                    <div className="single-insta-feeds">
                        <Link to="/catalog/5a58a937-a2d0-4a54-aecb-455704a16248">
                            <img src="https://donevatania.com/wp-content/uploads/2022/02/DSC0324-21.jpg" alt="" />
                        </Link>
                    </div>

                    <div className="single-insta-feeds">
                        <Link to="/catalog/8887a937-a2d0-4a54-aecb-488734a16249">
                            <img src="https://donevatania.com/wp-content/uploads/2022/11/DSC657311-768x1152.jpg" alt="" />
                        </Link>
                    </div>

                    <div className="single-insta-feeds">
                        <Link to="/catalog/9997a937-a2d0-4a54-aecb-488734a16249">
                            <img src="https://donevatania.com/wp-content/uploads/2021/03/DSC3877.jpg" alt="" />
                        </Link>
                    </div>

                    <div className="single-insta-feeds">
                        <Link to="/catalog/6987a937-a2d0-4a54-aecb-488734a16249">
                            <img src="https://donevatania.com/wp-content/uploads/2022/07/%D0%9B%D0%B8%D0%BC%D0%BE%D0%BD%D0%BE%D0%B2%D0%B8-%D0%A7%D0%B8%D0%B9%D0%B7%D0%BA%D0%B5%D0%B9%D0%BA-%D0%B1%D0%B0%D1%80%D1%87%D0%B5%D1%82%D0%B0-%D1%81-%D0%BC%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8-%D0%B8-%D0%BC%D0%B0%D1%81%D0%BB%D0%B5%D0%BD%D0%B8-%D1%82%D1%80%D0%BE%D1%85%D0%B8-12.jpg" alt="" />
                        </Link>
                    </div>

                    <div className="single-insta-feeds">
                        <Link to="/catalog/6557a937-a2d0-4a54-aecb-488734a16248">
                            <img src="http://2.bp.blogspot.com/-EqwayluZrEc/VlBwCi0XFEI/AAAAAAAAIzY/sXyqbyJaNUI/s1600/DSC_2367.JPG" alt="" />
                        </Link>
                    </div>

                </div>
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
                            <Link to="/"><img src="img/logo.png" alt="" /></Link>
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