import styles from "./About.module.css"
export const About = () => {
    return (
        <div className={styles["about-page"]}>
            <div className="breadcumb-area bg-img bg-overlay about" style={{ backgroundImage: `url("img/bg-img/2018_06_27_48298_1530062479._large.jpg")`}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcumb-text text-center">
                                <h2>За мен</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className={styles["about-area"]}>
                <div className={styles["container-about"]}>
                    <div className="row">
                        <div className="col-12">
                            <div className={styles["section-heading"]}>
                                <h3>Здравейте!</h3>
                                <h4>Много се радвам, че сте попаднали в моя малък вкусен свят!</h4>
                                <p className="text-center">Казвам се Таня и за мен създаването на ястия, които са едновременно вкусни и красиви, е моята истинска страст. Опитвам се да докажа, че тортите могат да бъдат красиви и без използването на фондан, както и вярвам, че всеки може да приготви вкусна храна у дома с правилната рецепта, верните продукти и напътствия от приятел. Аз ще бъда вашият верен приятел, ако искате да се потопите в дебрите на вкусната храна! Вярвам, че в моето любимо местенце има за всекиго по нещо и ще се радвам да намерите вашата муза тук при мен!</p>
                                 <div className={styles["about-img"]}>
                                <img className="mb-70" src="img/bg-img/smiling-young-woman-chef-in-apron-standing-at-the-kitchen.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};