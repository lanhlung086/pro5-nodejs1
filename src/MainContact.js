import React from "react";

export default function MainContact(){
    return(
        <section className="section main-contact">
            <div className="container main-contact__container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="get-in-touch-block">
                            <h2>Get in Touch</h2>
                            <p>Since opening in 1912, our love, experience, and knowledge have made our bakery the most successful and well-known in Tampa. We offer the finest baked goods, wedding cakes, and catering in the Tampa Bay area. Please give at least a two-week notice on any specialty creations! You may contact us for a wedding consultation, a speciality cake, or with general questions.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="image-block">
                            <img src="imgs/cake12.jpg" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="contact-block">
                            <div className="row">
                                <div className="col-md-6 name-area">
                                    <form method="post" action="#">
                                        <label htmlFor="name">Name <sup><i className="fas fa-star-of-life" /></sup></label><br />
                                        <input type="text" id="name" name="name" required />
                                    </form>
                                </div>
                                <div className="col-md-6 email-area">
                                    <form method="post" action="#">
                                        <label htmlFor="email">Email <sup><i className="fas fa-star-of-life" /></sup></label><br />
                                        <input type="email" id="email" name="email" required />
                                    </form>
                                </div>
                                <div className="col-md-12 phone-area">
                                    <form method="post" action="#">
                                        <label htmlFor="phone">Phone</label><br />
                                        <input type="tel" id="phone" name="phone-number" />
                                    </form>
                                </div>
                                <div className="col-md-12 message-area">
                                    <form>
                                        <label htmlFor="message">Message</label><br />
                                        <textarea id="message" name="message" rows={10} defaultValue={""} />
                                    </form>
                                </div>
                            </div>
                            <div className="button-area">
                                <form method="post" action="#">
                                    <button type="submit">SEND MESSAGE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="worktime-block">
                            <div className="row">
                                <div className="col-md-6 worktime-img-container">
                                    <img src="imgs/work-time.jpg" />
                                </div>
                                <div className="col-md-6 worktime-info-container">
                                    <h4>ADDRESS</h4>
                                    <p> 2909 W Cypress Street, Tampa, FL 33609</p>
                                    <h4>PHONE</h4>
                                    <p>813-879-4544</p>
                                    <h4>BUSINESS HOURS</h4>
                                    <p>
                                        Mon-Fri: 9:00am-5:00pm<br />
                                        Saturday:  9:00am-6:00pm<br />
                                        Sunday:  9:00am-4:00pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wood-bg">
            </div>
        </section>
    )
}