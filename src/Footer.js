import {Link} from "react-router-dom";

export default function Footer(){
    return (
        <footer className="section footer" id="footer">
            <div className="block subscribe-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>SUBSCRIBE FOR SPECIALS</h3>
                        </div>
                        <div className="col-md-3 icon-block">
                            <a href="https://www.instagram.com/alessibakery/"><span><i className="fab fa-instagram fa-lg" /></span></a>
                            <a href="https://twitter.com/alessibakery?lang=en"><span><i className="fab fa-twitter fa-lg" /></span></a>
                            <a href="https://www.facebook.com/AlessiBakeries/"><span><i className="fab fa-facebook-f fa-lg" /></span></a>
                        </div>
                        <div className="col-md-9 email-block">
                            <form>
                                <input type="email" name="email" id="email" placeholder="EMAIL ADDRESS" />
                                <span><button type="submit">SUBSCRIBE</button></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer">
                <div className="container">
                    <div className="col-md-2 footer-left">
                        <div id="custom_html-2" className="widget_text widget widget_custom_html">
                            <div className="textwidget custom-html-widget">
                                <img src="https://www.alessibakery.com/wp-content/uploads/2018/03/chef.png" alt="Alessi" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 footer-center">
                        <div id="text-2" className="widget widget_text">
                            <h1 className="widget-title">CUSTOM ORDERS</h1>
                            <div className="textwidget">
                                <p>Would you like to place a custom Order or have a special request</p>
                                <p>
                                    <a className="callus" href="tel:8138794544">CALL US AT 813.879.4544</a>
                                </p>
                            </div>
                        </div>
                        <div id="text-3" className="widget widget_text">
                            <h1 className="widget-title">ALESSI LOCATION</h1>
                            <div className="textwidget">
                                <p>2009 W Cypress Street</p>
                                <p>Tampa, FL 33609</p>
                                <a href="https://www.google.com/maps/place/Alessi+Bakery/@27.9524496,-82.4926736,17.25z/data=!4m5!3m4!1s0x88c2c37668665b27:0x3c52ed3ffa3a1fc4!8m2!3d27.95228!4d-82.490094"><p className="viewmap"><u className="color">VIEW MAP</u></p></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 footer-center2">
                        <div id="text-4" className="widget widget_text">
                            <h1 className="widget-title">CATERING</h1>
                            <div className="textwidget">
                                <p>Make your even shinef Find out more about what we offer.</p>
                            </div>
                        </div>
                        <div id="text-5" className="widget widget_text">
                            <h1 className="widget-title">SPECIALTY CAKES</h1>
                            <div className="textwidget">
                                <p>Need a cake for you or your event? See our delectable selection of desserts!</p>
                            </div>
                        </div>
                        <div id="text-6" className="widget widget_text">
                            <h1 className="widget-title">BAKERY MENU</h1>
                            <div className="textwidget">
                                <p>
                                    <Link to="/Home"><u className="color">View &amp; download</u></Link>
                                    " our Bakery Menu to order ahead! YES, WE DELIVER TOO! "
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer-right text-right">
                        <div id="wprev_widget-2" className="widget wprev_widget">
                            <h1 className="widget-title">CUSTOMER REVIEWS</h1>
                            <style dangerouslySetInnerHTML={{__html: "" }} />
                            <div className="wprevpro_t1_outer_div_widget w3_wprs-row-padding-small">
                                <div className="wprevpro_t1_DIV_1 marginb10 w3_wprs-col l12">
                                    <div className="wprevpro_t1_DIV_2 wprev_preview_bg1_T1_widget wprev_preview_bradius_T1_widget">
                                        <p className="wprevpro_t1_P_3 wprev_preview_tcolor1_T1_widget">
                  <span className="wprevpro_start_imgs_T1_widget">
                    <img src="https://www.alessibakery.com/wp-content/plugins/wp-google-places-review-slider/public/partials/imgs/stars_5_yellow.png" alt="5 star review" className="wprevpro_t1_star_img_file" />
                    "&nbsp;&nbsp;"
                  </span>
                                            Went there for the first time today, and was immediately greeted by the friendliest staff ever. Purchased some
                                            cookies, a small pie and a cupcake, and they were ALL delicious. Adding this place to
                                            our list of regular places to visit. Good stuff!
                                        </p>
                                    </div>
                                    <span className="wprevpro_t1_A_8">
                <img src="https://lh4.googleusercontent.com/-qdAGKQvqmzM/AAAAAAAAAAI/AAAAAAAABew/xrMaO_UobWI/s128-c0x00000000-cc-rp-mo/photo.jpg?sz=100" alt="thumb" className="wprevpro_t1_IMG_4" />
              </span>
                                    <span className="wprevpro_t1_SPAN_5 wprev_preview_tcolor2_T1_widget">
                AUBREY SILVA
                <br />
                <span className="wprev_showdate_T1_widget">
                </span>
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright_area">
                <div className="copyright col-md-6">Copyright ©2020 Alessi Bakeries | All Rights Reserved.</div>
                <div className="develop col-md-6">
                    Designed and Developed Footer by:
                    <a href="https://www.facebook.com/profile.php?id=100032736781264"><u className="color">Trần Đình Quý</u></a>
                </div>
            </div>
        </footer>

    )
}