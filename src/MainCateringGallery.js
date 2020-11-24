import React from 'react';
import GalleryPrototype from "./GalleryPrototype";

export default class MainCateringGallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            gallery: [
                {
                    image:"imgs/hamburger01.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger02.jpg",
                    height:"auto",
                    width:"100%",
                },
                {
                    image:"imgs/hamburger03.jpg",
                    height:"auto",
                    width:"100%",
                },
                {
                    image:"imgs/hamburger04.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger05.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger06.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger07.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger08.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger09.jpg",
                    height:"auto",
                    width:"100%",
                },
                {
                    image:"imgs/hamburger10.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger11.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger12.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger13.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger14.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger15.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger16.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger17.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger18.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger19.png",
                    height:"100%",
                    width:"auto",
                },
                {
                    image:"imgs/hamburger20.png",
                    height:"100%",
                    width:"auto",
                },
            ]
        }
    }
    render() {
        const gallery = this.state.gallery;
        return (
            <GalleryPrototype images={gallery}/>
        )
    }
}