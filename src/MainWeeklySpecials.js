import React from "react";

export default function MainWeeklySpecials(){
    return(
        <>
            <div className="section iframe-weekly-specials" id="iframe-weekly-specials">
                <div className="close-button-weekly-specials" id="close-button-weekly-specials"><i className="fas fa-times fa-2x" /></div>
                <div className="iframe-weekly-specials__img"><img src="imgs/weekly-special.jpg" /></div>
            </div>
            <section className="section main-weekly-specials">
                <div className="container main-weekly-specials__container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item-blocks">
                                <img id="weekly-specials-img" src="imgs/weekly-special.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wood-bg">
                </div>
            </section>
        </>
    )
}