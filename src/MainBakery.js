import {Link} from "react-router-dom";

export default function MainBakery(){
    return(
        <section className="section main-bakery">
            <div className="menus">
                <div className="container menus__container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item-blocks">
                                <div className="img-container">
                                    <img src="imgs/cakes-background01.jpg" />
                                </div>
                                <div className="borders" />
                                <div className="borders" />
                                <div className="borders" />
                                <div className="borders" />
                                <div className="info-container">
                                    <h3>Bakery Menu</h3>
                                    <p>From traditional cannolis to modern and creative cronuts, our bakery has a treat for everyone! If you feast your eyes on our display case, you may want one of everything!</p>
                                    <Link to="/BakeryMenu" className="view-button">VIEW MENU</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item-blocks">
                                <div className="img-container">
                                    <img src="imgs/cake04.jpg" />
                                </div>
                                <div className="borders" />
                                <div className="borders" />
                                <div className="borders" />
                                <div className="borders" />
                                <div className="info-container">
                                    <h3>Cakes</h3>
                                    <p>No matter what the occasion, Alessi Bakeries has the perfect cake for you, carefully baked and exquisitely decorated. We will do whatever it takes for your dream cake!.</p>
                                    <Link to="/Cakes" className="view-button">VIEW CAKES</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item-blocks">
                                <div className="img-container">
                                    <img src="imgs/catering-gallery.jpg" />
                                </div>
                                <div className="borders" />
                                <div className="borders" />
                                <div className="borders" />
                                <div className="borders" />
                                <div className="info-container">
                                    <h3>Catering</h3>
                                    <p>From galas to work lunches, we can meet your every need. We work closely with you to ensure superb service. Call today to speak with a catering specialist.</p>
                                    <Link to="/Catering" className="view-button">VIEW CATERING</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wood-bg01" />
            <div className="menu-special">
                <div className="container menu-special__container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="menu-special__img-container">
                                <img src="imgs/restaurant.jpg" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="menu-special__info-container">
                                <h3>Weekly Specials</h3>
                                <p>Every week we introduce new deals and specials! We value you, so we always want to keep your taste buds and your wallet happy. Check our social media each Monday morning to see what sweet deals we have.</p>
                                <Link to="/WeeklySpecials" className="view-button">VIEW SPECIALS</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wood-bg02" />
        </section>
    )
}