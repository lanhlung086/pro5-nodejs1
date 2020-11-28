import React from 'react';

export default function GalleryPrototype(props) {
    const gallery = props.images;
    return (
        <>
            <div className="iframe-gallery" id="iframe">
                <div className="close-button" id="close-button"><i className="fas fa-times fa-2x" /></div>
                <div className="arrow-left" id="arrow-left"><i className="fas fa-chevron-left fa-4x" /></div>
                <div className="arrow-right" id="arrow-right"><i className="fas fa-chevron-right fa-4x" /></div>
                <div className="iframe-gallery__img"><img id="image-swap" src style={{height: '100%'}} /></div>
            </div>
            <section className="section main-gallery">
                <div className="container main-gallery__container">
                    {
                        gallery.map(function(e){
                            return(
                                <div className="items-block">
                                    <div className="items">
                                        <img className="images" src={e.image} style={{width: e.width, height: e.height, top: e.position}} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="wood-bg">
                </div>
            </section>
        </>
    )
}