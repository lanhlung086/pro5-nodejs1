import React from "react";
import {Link} from "react-router-dom";

export default function MainHome(){
    return (
        <section className="section main">
            <div className="main01">
                <div className="menu-block">
                    <div className="container-main01">
                        <h3 style={{textAlign: 'center'}}>Alessi Bakeries Menu</h3>
                        <p style={{textAlign: 'center'}}>Whether you are looking for the perfect wedding cake or just looking for a delicious treat, Alessi Bakeries has what you need.</p>
                    </div>
                    <div className="container bakery-items">
                        <div className="menu-item col-md-3">
                            <Link to="#" className="menu-item-a">
                                <div className="menu-image">
                                    <img src="imgs/sandwiches.png" />
                                </div>
                                <div className="menu-title">
                                    <h3>Deli</h3>
                                </div>
                            </Link>
                            <div className="about-menu">
                                Our deli offers a variety of delicious options to the hungry diner, including our famous hand-carved Cuban sandwiches and deviled crabs.
                            </div>
                        </div>
                        <div className="menu-item col-md-3">
                            <Link to="#" className="menu-item-a">
                                <div className="menu-image">
                                    <img className="note-picture" src="imgs/cakes.png" />
                                </div>
                                <div className="menu-title">
                                    <h3>Cakes</h3>
                                </div>
                            </Link>
                            <div className="about-menu">
                                No matter what the occasion, Alessi Bakeries has the perfect cake for you, carefully baked and exquisitely decorated.
                            </div>
                        </div>
                        <div className="menu-item col-md-3">
                            <Link to="#" className="menu-item-a">
                                <div className="menu-image">
                                    <img src="imgs/pastries.png" />
                                </div>
                                <div className="menu-title">
                                    <h3>Pastries</h3>
                                </div></Link>
                            <div className="about-menu">
                                Whether you are looking for our classic cannolis or modern twists such as our famous cronuts, Alessi Bakeries offers the highest quality pastries in Tampa Bay.
                            </div>
                        </div>
                        <div className="menu-item col-md-3">
                            <Link to="#" className="menu-item-a">
                                <div className="menu-image">
                                    <img src="imgs/others.png" />
                                </div>
                                <div className="menu-title">
                                    <h3>Others</h3>
                                </div></Link>
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
                            <p><Link to="#" className="button">LEARN MORE</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main02">
                <div className="trailer-menu-item">
                    <div className="trailer-menu-item-part1 col-md-6">
                        <h2>Featured Menu Items</h2>
                        <p className="subheading">Available at Boudin SF locations. Menus may vary by location.</p>
                    </div>
                    {/*/.section-heading__headings*/}
                    <div className="col-md-6">
                        <div className="trailer-menu-item__buttons ">
                            <p>
                                <br />
                                <Link className="button-item" to="#">Order Now</Link>
                            </p>
                        </div>
                        {/*/.section-heading__buttons*/}
                    </div>
                </div>
                <div className="slick-track">
                    <div className="cake-sp">
                        <Link className="featured-menu-item " to="#" tabIndex={0}>
                            <div className="featured-menu-item__image">
                                <img width={342} height={314} src="https://3d1zvgya81uuh1sso1s4f1e1-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/california-baquette-burger-342x314.jpeg" alt="Baguette burger with Havarti, lettuce, tomatoes, smashed avocado on a garlic-buttered toasted multigrain baguette" />
                            </div>
                            <div className="featured-menu-item__title">
                                California Baguette Burger
                            </div>
                        </Link>
                    </div>
                    <div className="cake-sp">
                        <Link className="featured-menu-item " to="#" tabIndex={0}>
                            <div className="featured-menu-item__image">
                                <img width={342} height={314} src="https://3d1zvgya81uuh1sso1s4f1e1-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/menu_sandwich_turkey_sandwich-342x314.jpeg" alt="Turkey Avocado Sandwich with Havarti, tomatoes, lettuce and mayo on multigrain bread" />
                            </div>
                            <div className="featured-menu-item__title">
                                Turkey Avocado
                            </div>
                        </Link>
                    </div>
                    <div className="cake-sp">
                        <Link className="featured-menu-item " to="#" tabIndex={0}>
                            <div className="featured-menu-item__image">
                                <img width={342} height={314} src="https://3d1zvgya81uuh1sso1s4f1e1-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/clam-chowder-342x314.jpeg" className="attachment-featured_menu_item_thumb size-featured_menu_item_thumb" alt="Clam Chowder in a Sourdough Bread Bowl" />
                            </div>
                            <div className="featured-menu-item__title">
                                Clam Chowder
                            </div>
                        </Link>
                    </div>
                </div>
                {/* .widget-group__inner */}
                <div className="ad-content">
                    <div className="ad-content-detail">
                        <h3>
                            <Link to="#">Fresh Ingredients. Every Day</Link>
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
                        <img src="imgs/knot.png" alt="The Knot" />
                        <img src="imgs/weddingwire2019.png" alt="WeddingWire" className="weddingwire-img" />
                        <img src="imgs/aislesociety.png" alt="Aisle" />
                        <img src="imgs/stylistic-leaves.jpg" alt="Stylist Leaves" />
                    </div>
                    <div className="col-md-4" />
                </div>
                <div className="block history-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h3>Our History</h3>
                                <p>The Alessi Bakeries story began in 1912, when our founder Nicolo Alessi first began to offer his European style bread and baked goods to the people of Tampa. Nicolo's focus on quality helped Alessi Bakeries grow from its humble origins to one of the most respected bakeries in the country. We are proud of our rich history and invite you to learn more about what makes Alessi Bakeries so special.</p>
                                <Link to="#">LEARN MORE</Link>
                            </div>
                            <div className="col-md-4">
                                <img src="imgs/bakery_history.jpg" alt="Power Rangers" title="Power Rangers" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block creation-content">
                    <div className="creation-block col-md-4">
                        <Link to="/CateringGallery" className="image-link"><img src="imgs/hamburger01.png" /></Link>
                        <Link to="/CateringGallery">View More</Link>
                    </div>
                    <div className="creation-block col-md-4">
                        <Link to="/CakesGallery" className="image-link"><img src="imgs/cake09.jpg" /></Link>
                        <Link to="/CakesGallery">View More</Link>
                    </div>
                    <div className="creation-block col-md-4">
                        <Link to="/CateringGallery" className="image-link"><img src="imgs/hamburger06.png" /></Link>
                        <Link to="/CateringGallery">View More</Link>
                    </div>
                    <div className="creation-block col-md-4">
                        <Link to="/CakesGallery" className="image-link"><img src="imgs/cake06.jpg" /></Link>
                        <Link to="/CakesGallery">View More</Link>
                    </div>
                    <div className="creation-block col-md-4">
                        <Link to="/CateringGallery" className="image-link"><img src="imgs/hamburger10.png" /></Link>
                        <Link to="/CateringGallery">View More</Link>
                    </div>
                    <div className="creation-block col-md-4">
                        <Link to="/CakesGallery" className="image-link"><img src="imgs/cake11.jpg" /></Link>
                        <Link to="/CakesGallery">View More</Link>
                    </div>
                    <img src="imgs/logo.png" alt="Logo" className="logo" />
                    <h3>Our Creations</h3>
                </div>
            </div>
        </section>

    )
}