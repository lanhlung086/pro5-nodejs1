export default function Deli() {
    return(
        <>
            <header className="section header">
                <h1 className="header_title">Deli</h1>
            </header>
            <section className="section main">
                <div className="content-menu">
                    <div className="container">
                        <div className="row">
                            <div className="about-deli col-md-6">
                                <h3 className="about-deli-detail">About Alessi's Deli</h3>
                                <p>As an independent, family-owned business, Alessi’s Deli serves our diners the only way we know how: with high-quality, fresh goods that are baked daily. Our deli offers a variety of delightful options for any guest, even if you’re on the go. We recommend trying our famous, hand-carved Cuban sandwiches and deviled crabs.</p>
                                <img className="about-deli-detail-pic center-block" src="../imgs/san6.jpg" alt="brunch"  />
                            </div>
                            <div className="about-deli-pic col-md-6" />
                        </div>
                    </div>
                </div>
                <div className="deli-menu">
                    <h1 className="deli-menu-title">Deli Menu</h1>
                </div>
                <div className="menu-deli">
                    <div className="container">
                        <h3 className="menu-deli-pic" />
                        <div className="row">
                            <div className="menu-deli-detail " id="products">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wood-bg01" />
            </section>
        </>


    )
}