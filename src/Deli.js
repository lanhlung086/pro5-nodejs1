var products=[
    {
        productName: "Mexico Burritos",
        price: 12,
        image:"../imgs/menu2.jpg",
        star:5
    },
    {
        productName: "Mexican Tacos",
        price: 12,
        image:"../imgs/menu3.jpg",
        star:4
    },
    {
        productName: "Veggie Burger",
        price: 12,
        image:"../imgs/menu4.jpg",
        star:3.5
    },
    {
        productName: "French SandWich",
        price: 12,
        image:"../imgs/menu5.jpg",
        star:3
    },
    {
        productName: "Big Bacon Burger",
        price: 12,
        image:"../imgs/menu6.jpg",
        star:1
    },
    {
        productName: "American Bagel",
        price: 12,
        image:"../imgs/menu7.jpg",
        star:2
    },
    {
        productName: "Old Classic Sandwich",
        price: 12,
        image:"../imgs/menu-1.jpg",
        star:0
    },
    {
        productName: "Ice Cream",
        price: 12,
        image:"../imgs/menu8.jpg",
        star:3.5
    },



]

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
                                <div className="row">
                                    {
                                        products.map(function (e,i) {
                                            return (
                                                <div key={i} className="col-md-3">
                                                    <div className="item1 text-center">
                                                        <img className="product-image" src={e.image} height="300"
                                                             width="400"/>
                                                        <h2 className="product-name">{e.productName}</h2>
                                                        <div className="star">
                                                            <div className="star-box">
                                                                <div className="star-rate" style={{width:e.star/5*100+"%"}}>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="price">${e.price}</p>
                                                        <a href="#" className="add-to-cart text-uppercase">Add To Bag</a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wood-bg01" />
            </section>
        </>


    )
}