import './Home.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const Home = () => {
    return (
        <>
    <section className="hero-area">
         <OwlCarousel className="hero-slides owl-carousel owl-dots" loop margin={1} nav items={1}>
            <div className="single-hero-slide bg-img" style={{backgroundImage: "url(img/bg-img/bg1.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                                <h2 data-animation="fadeInUp" data-delay="300ms">Delicios Homemade Burger</h2>
                                <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
                                <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Receipe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-hero-slide bg-img" style={{backgroundImage: "url(img/bg-img/bg6.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                                <h2 data-animation="fadeInUp" data-delay="300ms">Delicios Homemade Burger</h2>
                                <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
                                <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Receipe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-hero-slide bg-img" style={{backgroundImage: "url(img/bg-img/bg7.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                                <h2 data-animation="fadeInUp" data-delay="300ms">Delicios Homemade Burger</h2>
                                <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
                                <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Receipe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    </section>

            <section className="top-catagory-area section-padding-80-0">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-lg-6">
                            <div className="single-top-catagory">
                                <img src="img/bg-img/bg2.jpg" alt="" />

                                <div className="top-cta-content">
                                    <h3>Strawberry Cake</h3>
                                    <h6>Simple &amp; Delicios</h6>
                                    <a href="receipe-post.html" className="btn delicious-btn">See Full Receipe</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="single-top-catagory">
                                <img src="img/bg-img/bg3.jpg" alt="" />

                                <div className="top-cta-content">
                                    <h3>Chinesse Noodles</h3>
                                    <h6>Simple &amp; Delicios</h6>
                                    <a href="receipe-post.html" className="btn delicious-btn">See Full Receipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="best-receipe-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h3>The best Receipies</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-best-receipe-area mb-30">
                                <img src="img/bg-img/r1.jpg" alt="" />
                                <div className="receipe-content">
                                    <a href="receipe-post.html">
                                        <h5>Sushi Easy Receipy</h5>
                                        <h6>Category name</h6>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-best-receipe-area mb-30">
                                <img src="img/bg-img/r2.jpg" alt="" />
                                <div className="receipe-content">
                                    <a href="receipe-post.html">
                                        <h5>Homemade Burger</h5>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-best-receipe-area mb-30">
                                <img src="img/bg-img/r3.jpg" alt="" />
                                <div className="receipe-content">
                                    <a href="receipe-post.html">
                                        <h5>Vegan Smoothie</h5>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-best-receipe-area mb-30">
                                <img src="img/bg-img/r4.jpg" alt="" />
                                <div className="receipe-content">
                                    <a href="receipe-post.html">
                                        <h5>Calabasa soup</h5>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-best-receipe-area mb-30">
                                <img src="img/bg-img/r5.jpg" alt="" />
                                <div className="receipe-content">
                                    <a href="receipe-post.html">
                                        <h5>Homemade Breakfast</h5>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-best-receipe-area mb-30">
                                <img src="img/bg-img/r6.jpg" alt="" />
                                <div className="receipe-content">
                                    <a href="receipe-post.html">
                                        <h5>Healthy Fruit Desert</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};