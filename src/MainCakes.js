import {Link} from 'react-router-dom'

export default function MainCakes() {
    return(
        <>
            <section className="section-menu">
                <div className="container menu">
                    <div className="col-md-4 item">
                        <img className="menu-image" src="imgs/wedding.jpg" height={360} width={360} />
                        <h4 className="menu-name">Wedding Cakes</h4>
                    </div>
                    <div className="col-md-4 item">
                        <img className="menu-image" src="imgs/specialty-cake.jpg" height={360} width={360} />
                        <h4 className="menu-name">Specialty Cakes</h4>
                    </div>
                    <div className="col-md-4 item">
                        <img className="menu-image1" src="imgs/specialty-desserts.png" height={360} width={360} />
                        <h4 className="menu-name1">Specialty Desserts</h4>
                    </div>
                </div>
            </section>
            <section className="wooden-area">
                <div className="container">
                    <div className="image-content">
                        <img className="ranch" src="imgs/Ranch-Wedding-Cake.png" />
                        <div className="content">
                            <h5 className="content-title">Wedding Cakes</h5>
                            <p className="mini-content"><b>Your special day deserves a special cake.</b></p>
                            <p className="mini-content">Let us provide you with a wedding cake you and your guests are sure to remember. We are committed to providing our customers with amazing cakes, exceptional value and a customer service experience that is second to none. It all starts with the wedding consultation, where you will meet with us to discuss the details of your big day. During the consultation, you will taste the flavors you are most interested in.</p>
                            <p className="mini-content">The wedding consultations are held at our Tampa bakery. If you have questions, our experts are here to help. You can <a href="#" className="contact-us"><u>contact us</u></a> and we will respond within 24 hours. You can also view our gallery for inspiration. We look forward to hearing from you!</p>
                            <p className="mini-content">
                                <Link to="/Contact" className="button-cakes text-uppercase">contact us</Link>
                                <Link to="/CakesGallery" className="button-cakes text-uppercase">view gallery</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="catering-area text-center">
                <div className="container">
                    <h3 className="specialty_cakes">Specialty Cakes</h3>
                    <p className="specialty_top">Cakes are the centerpiece of most any celebration. No matter what the occasion, Alessi Bakeries has the perfect cake for you, carefully baked and exquisitely decorated. Choose from a delightful selection, or let us help you design one that’s perfect for what you had in mind. We welcome every challenge!</p>
                    <div className="all-panel row">
                        <div className="col-md-4">
                            <div className="panel">
                                <h3 className="top-panel">Classic Cake/Icings Flavors</h3>
                                <p className="content-panel">
                                    White Vanilla Butter cream<br />
                                    Chocolate Choc. Butter cream<br />
                                    Yellow Cream Vanilla cream cheese<br />
                                    Half and Half or Marble Fudge<br />
                                    $5.00 Per Serving
                                </p>
                            </div>
                            <div className="panel">
                                <h3 className="top-panel">Specialty Cake Flavors</h3>
                                <p className="content-panel">
                                    Almond<br />
                                    Strawberry<br />
                                    Red velvet<br />
                                    Lemon<br />
                                    Coconut<br />
                                    Assorted fruit swirls<br />
                                    $5.50 per serving<br />
                                    Carrot<br />
                                    Amaretto, Rum and GLUTEN FREE<br />
                                    $6.00 Per Serving<br />
                                </p>
                            </div>
                            <div className="panel">
                                <h3 className="top-panel">Signature Specialty Flavors</h3>
                                <p className="content-panel">
                                    Italian Rum<br />
                                    Cassata<br />
                                    Chocolate Princess<br />
                                    Tiramisu<br />
                                    Cheesecake Center Layer<br />
                                    $7.00 Per Serving<br />
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel">
                                <h3 className="top-panel">Fruit Preserve Fillings</h3>
                                <p className="content-panel">
                                    Italian Rum<br />
                                    Raspberry<br />
                                    Pineapple<br />
                                    Lemon<br />
                                    Blackberry<br />
                                    Guava<br />
                                    Strawberry<br />
                                    Extra .50 cents Per Serving
                                </p>
                            </div>
                            <div className="panel">
                                <h3 className="top-panel">Mousse and Custard Fillings</h3>
                                <p className="content-panel">
                                    Lemon Mousse<br />
                                    Raspberry Mousse<br />
                                    Chocolate Mousse<br />
                                    Mocha Mousse<br />
                                    Pineapple Mousse<br />
                                    Strawberry Mousse<br />
                                    Nutella Mousse<br />
                                    Cookies N’ Cream Mousse<br />
                                    Vanilla/Choc Butter Custard<br />
                                    Cannoli cream<br />
                                    Extra$1.00 Per Serving
                                </p>
                            </div>
                            <div className="panel">
                                <h3 className="top-panel">Premium Fillings</h3>
                                <p className="content-panel">
                                    Fresh Sliced Strawberries<br />
                                    Fresh Tropical Fruit<br />
                                    Fresh Mixed Berries<br />
                                    (in Glaze, Custard or Bavarian Cream)<br />
                                    Extra $2.00 Per Serving
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel">
                                <h3 className="top-panel">Rolled Fondant</h3>
                                <p className="content-panel">Fondant Covered: $6.00 Per Serving</p>
                                <p className="content-panel">Covered and Hand Made Embellishments: start at $7 Per Serving</p>
                                <p className="content-panel">Gum paste, Artificial and Fresh Cut Flowers are all available at an additional charge.</p>
                                <p className="content-panel">Painted Numbers: $5.00 each</p>
                                <p className="content-panel">Naked Cakes Start at $4 Per serving</p>
                            </div>
                        </div>
                    </div>
                    <div className="specialty-desserts">
                        <h3 className="specialty-desserts-title">Specialty Desserts</h3>
                    </div>
                    <div className="grid-cell text-center">
                        <div className="panel-widget1">
                            <h3 className="line-1st">Classic Cupcake Flavors</h3>
                            <h4 className="line-2nd">(starts at $.85 -$1.50)</h4>
                            <h5 className="line-3rd">White, Chocolate, Yellow Cream, Marble, Buttercream, Chocolate buttercream, fudge, cream cheese and whipped cream</h5>
                        </div>
                        <div className="panel-widget1">
                            <h3 className="line-1st">Fancy Designs with Style</h3>
                            <h4 className="line-2nd">(starts at $2.49)</h4>
                            <h5 className="line-3rd">Rooled Sugar Pearl, Crystal Sugar, Sugar Soft Flowers</h5>
                        </div>
                        <div className="panel-widget1">
                            <h3 className="line-1st">Specialty Gourmet Cupcake Flavors</h3>
                            <h4 className="line-2nd">(starts at $2.49)</h4>
                            <h5 className="line-3rd">Cookie and Cream, Chocolate Peanut Butter, Raspberry Lemonade, Coconut Cream, Red Velvet, Strawberry Cream Cheese, Carrot, Hummingbird, Pina Colada Pineapple</h5>
                        </div>
                        <div className="panel-widget1">
                            <h3 className="line-1st">Fondant Cupcakes and Gum Paste Flowers </h3>
                            <h4 className="line-2nd">(varyiesfrom $2.49 - $6)</h4>
                            <h5 className="line-3rd">Most specialty cupcake designs vary in price based on flavor and design. Pricing may change based on these options.</h5>
                        </div>
                        <div className="panel-widget1">
                            <h3 className="line-1st">Tres Leches Cakes</h3>
                            <h4 className="line-2nd">(Price Varies from $8.95 to $67.95))</h4>
                            <h5 className="line-3rd">
                                Single 8”square Pan (feeds 6-8) - $8.95. With fresh fruit - $13.95,<br />
                                1/4 sheet pan (feeds 20) - $28.95. With fresh fruit - $40.95<br />
                                1/2 sheet pan (feeds 40) - $49.95. With fresh fruit - $67.95
                            </h5>
                        </div>
                        <div className="panel-widget1">
                            <h3 className="line-1st">Fresh Baked Fruit 3" Pies</h3>
                            <h4 className="line-2nd">($2.95 each)</h4>
                            <h5 className="line-3rd">Apple, Blueberry, Pecan, Cherry Blackberry, Pumpkin</h5>
                        </div>
                        <div className="panel-widget1">
                            <h3 className="line-1st">3" Mousse Cream Pies</h3>
                            <h4 className="line-2nd">($2.95 each)</h4>
                            <h5 className="line-3rd">
                                Lemon Chiffon Mousse, Chocolate Raspberry, Chocolate Mousse, Peanut Butter Cup, Aloha Pineapple, Fresh Strawberry,<br />
                                Nutella Mousse,  Cookie N' Cream, Vanilla Butter Custard Boston Cream, Key Lime, Fresh Fruit Bavarian
                            </h5>
                        </div>
                        <div className="panel-widget1">
                            <h3 className="line-1st">Gourment Cheese Torte Layers</h3>
                            <h4 className="line-2nd">(varies $45 -$75)</h4>
                            <h5 className="line-3rd">
                                Includes two cakes layers, two filling layers, and 1 full cheesecake layer. Flavors: carrot, Red Velvet with cheesecake and cream cheese. White or chocolate cake with a cheesecake layer along with raspberry, strawberry, pineapple, caramel or fudge filling. These can be iced in chocolate butter cream or vanilla butter cream. If no filling is chosen the cake will be filled with the outside frosting.</h5>
                        </div>
                        <div className="panel-widget1">
                            <h3 className="line-1st">Mini Desserts and Specialty</h3>
                            <h4 className="line-2nd">(varies from $1.50 to $ 14.95)</h4>
                            <h5 className="line-3rd">
                                Assorted Cake Pops - $1.50<br />
                                Specialty Cake Pops - $2-$3<br />
                                Mini Cupcakes - $.75<br />
                                Gourmet Shooters - $2.75<br />
                                Mini Black and White Cookies - $1.50<br />
                                Traditional Cannoli - $1.25<br />
                                Assorted Classic Cannoli - $1.50<br />
                                Mini Cream Puffs and Eclairs - $.65- $.95 each<br />
                                Chocolate Dipped Strawberries - $1.95<br />
                                TUX and Bride Strawberries - $2.95<br />
                                Assorted Mini Brownie bites - $.95<br />
                                Flan - $2.49<br />
                                Bread Pudding Cups - $2.95<br />
                                Bite size assorted cheesecakes - $.95-$1.50<br />
                                Cheesecake cups - $2.49<br />
                                Parfaits - $3.49<br />
                                Italian Tea Cookies - $14.95
                            </h5>
                        </div>
                        <div className="panel-widget1">
                            <h3 className="line-1st">Gourmet Cookie Cakes</h3>
                            <h4 className="line-2nd">(varies from $14.95 to $ 120.95)</h4>
                            <h5 className="line-3rd">
                                Higher Cookie cakes that are flipped out of pan and placed on wrapped board.<br />
                                8" round - (feeds 8) - $14.95<br />
                                10" round - (feeds 12) - $18.95<br />
                                12" round - (feeds 16) - $24.95<br />
                                14" round - (feeds 25) - $30.95<br />
                                16" round - (feeds 40) - $40.95<br />
                                18" round - (feeds 50) - $65.95<br />
                                Full Sheet - (feeds 75) - $120.95
                            </h5>
                            <h3 className="line-1st">10″ GRAB N GO Chocolate Chip cookie</h3>
                            <h4 className="line-2nd" style={{fontSize: 18}}>(thinner baked in black pan) $12.95</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}