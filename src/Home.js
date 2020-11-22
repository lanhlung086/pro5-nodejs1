import {Link} from "react-router-dom";
export default function Home() {
    return(
        <>
            <header className="section header">
                <img style={{height: 800, width: '100%'}} src="imgs/header-background-img.jpg" />
                <img className="header-background-img1" src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.15752-9/122488039_806596213499572_5439198773189576991_n.png?_nc_cat=103&ccb=2&_nc_sid=ae9488&_nc_ohc=VvU7R34mTukAX_zCYP1&_nc_oc=AQnW8m_9QqwVw2HzTTGnX0UQN_HUvbCIfxGOnC2dSK1uTllxVpT9CfVoBtW1x1m16_s&_nc_ht=scontent.fhan2-6.fna&oh=51fb051614e62a0e9136a9b6aa1cf39e&oe=5FBB5564" />
            </header>
            <section className="section main">
                <div className="main01">
                    <div className="menu-block">
                        <div className="container-main01">
                            <h3 style={{textAlign: 'center'}}>Alessi Bakeries Menu</h3>
                            <p style={{textAlign: 'center'}}>Whether you are looking for the perfect wedding cake or just looking for a delicious treat, Alessi Bakeries has what you need.</p>
                        </div>
                        <div className="container bakery-items">
                            <div className="menu-item col-md-3">
                                <a href="#" className="menu-item-a">
                                    <div className="menu-image">
                                        <img src="imgs/sandwiches.png" />
                                    </div>
                                    <div className="menu-title">
                                        <h3>Deli</h3>
                                    </div>
                                </a>
                                <div className="about-menu">
                                    Our deli offers a variety of delicious options to the hungry diner, including our famous hand-carved Cuban sandwiches and deviled crabs.
                                </div>
                            </div>
                            <div className="menu-item col-md-3">
                                <a href="#" className="menu-item-a">
                                    <div className="menu-image">
                                        <img className="note-picture" src="imgs/cakes.png" />
                                    </div>
                                    <div className="menu-title">
                                        <h3>Cakes</h3>
                                    </div>
                                </a>
                                <div className="about-menu">
                                    No matter what the occasion, Alessi Bakeries has the perfect cake for you, carefully baked and exquisitely decorated.
                                </div>
                            </div>
                            <div className="menu-item col-md-3">
                                <a href="#" className="menu-item-a">
                                    <div className="menu-image">
                                        <img src="imgs/pastries.png" />
                                    </div>
                                    <div className="menu-title">
                                        <h3>Pastries</h3>
                                    </div></a>
                                <div className="about-menu">
                                    Whether you are looking for our classic cannolis or modern twists such as our famous cronuts, Alessi Bakeries offers the highest quality pastries in Tampa Bay.
                                </div>
                            </div>
                            <div className="menu-item col-md-3">
                                <a href="#" className="menu-item-a">
                                    <div className="menu-image">
                                        <img src="imgs/others.png" />
                                    </div>
                                    <div className="menu-title">
                                        <h3>Others</h3>
                                    </div></a>
                                <div className="about-menu">
                                    Our delicious creations are perfect for any occasion from the largest celebrations to a personal indulgence.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section specialty-cakes">
                        <div className="container specialty-cakes">
                            <div className="image-specialty col-md-4">
                                <img src="imgs/specialty-cake.png" />
                            </div>
                            <div className="about-specialty col-md-8">
                                <h3>Alessi Specialty Cakes</h3>
                                <p>Cakes are the centerpiece of most any celebration. No matter what the occasion, Alessi Bakeries has the perfect cake for you, carefully baked and exquisitely decorated. Choose from a delightful selection, or let us help you design one that's perfect for what you had in mind. We welcome every challenge!</p>
                                <p><a href="#" className="button">LEARN MORE</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main02">
                    <div className="container">
                        <div className="block menu-main02">
                            <div className="row">
                                <div className="title-main02 col-md-6">
                                    <h2>Featured Menu Items</h2>
                                    <p className="subheading">Available at Boudin SF locations. Menus may vary by location.</p>
                                </div>
                                <div className="title-main02-button col-md-6">
                                    <a className="button-item" href="#">Order Now</a>
                                </div>
                            </div>
                            {/*            DONE P1 MAIN02*/}
                            <div className="row">
                                <div className="col-md-4 newsp02">
                                    <img src="../imgs/menu-1.jpg" />
                                    <h2 className="sp-name text-center">Old Classic Sandwich</h2>
                                </div>
                                <div className="col-md-4 newsp02">
                                    <img src="../imgs/menu2.jpg" />
                                    <h2 className="sp-name text-center">Mexican Burritos</h2>
                                </div>
                                <div className="col-md-4 newsp02">
                                    <img src="../imgs/menu3.jpg" />
                                    <h2 className="sp-name text-center">Mexican Tacos</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* .widget-group__inner */}
                    <div className="ad-content">
                        <div className="ad-content-detail">
                            <h3>
                                <a href="#">Fresh Ingredients. Every Day</a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="main03">
                    <div className="block achievement-content">
                        <div className="col-md-4" />
                        <div className="col-md-4 achievement-block">
                            <img src="imgs/stylistic-tree.jpg" alt="Stylistic Tree" />
                            <p>We are proud of our</p>
                            <h3>Achievement</h3>
                            <img src="../imgs/knot.png" alt="The Knot" />
                            <img src="../imgs/weddingwire2019.png" alt="WeddingWire" className="weddingwire-img" />
                            <img src="../imgs/aislesociety.png" alt="Aisle" />
                            <img src="../imgs/stylistic-leaves.jpg" alt="Stylist Leaves" />
                        </div>
                        <div className="col-md-4" />
                    </div>
                    <div className="block history-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <h3>Our History</h3>
                                    <p>The Alessi Bakeries story began in 1912, when our founder Nicolo Alessi first began to offer his European style bread and baked goods to the people of Tampa. Nicolo's focus on quality helped Alessi Bakeries grow from its humble origins to one of the most respected bakeries in the country. We are proud of our rich history and invite you to learn more about what makes Alessi Bakeries so special.</p>
                                    <a href="#">LEARN MORE</a>
                                </div>
                                <div className="col-md-4">
                                    <img src="../imgs/bakery_history.jpg" alt="Power Rangers" title="Power Rangers" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block creation-content">
                        <div className="creation-block col-md-4">
                            <a href="Duy/CateringGallery.html" className="image-link"><img src="Duy/imgs/hamburger01.png" /></a>
                            <a href="Duy/CateringGallery.html">View More</a>
                        </div>
                        <div className="creation-block col-md-4">
                            <a href="Duy/CakesGallery.html" className="image-link"><img src="Duy/imgs/cake09.jpg" /></a>
                            <a href="Duy/CakesGallery.html">View More</a>
                        </div>
                        <div className="creation-block col-md-4">
                            <a href="Duy/CateringGallery.html" className="image-link"><img src="Duy/imgs/hamburger06.png" /></a>
                            <a href="Duy/CateringGallery.html">View More</a>
                        </div>
                        <div className="creation-block col-md-4">
                            <a href="Duy/CakesGallery.html" className="image-link"><img src="Duy/imgs/cake06.jpg" /></a>
                            <a href="Duy/CakesGallery.html">View More</a>
                        </div>
                        <div className="creation-block col-md-4">
                            <a href="Duy/CateringGallery.html" className="image-link"><img src="Duy/imgs/hamburger10.png" /></a>
                            <a href="Duy/CateringGallery.html">View More</a>
                        </div>
                        <div className="creation-block col-md-4">
                            <a href="Duy/CakesGallery.html" className="image-link"><img src="Duy/imgs/cake11.jpg" /></a>
                            <a href="Duy/CakesGallery.html">View More</a>
                        </div>
                        <img src="imgs/logo.png" alt="Logo" className="logo" />
                        <h3>Our Creations</h3>
                    </div>
                </div>
            </section>
        </>
    )
}