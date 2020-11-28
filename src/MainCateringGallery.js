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
    componentDidMount() {
        var iFrame = document.getElementById("iframe");

        var imageSwap = document.getElementById("image-swap");
        var imgs = document.getElementsByClassName("images");
        var arrowLeft = document.getElementById("arrow-left");
        var arrowRight = document.getElementById("arrow-right");
        var closeButton = document.getElementById("close-button");

        function ImageClick(e){
            var a = e.target.getAttribute("src");
            iFrame.style.width = "100%";
            closeButton.style.display = "block";
            arrowRight.style.display = "block";
            arrowLeft.style.display = "block";
            imageSwap.src = a;
        }
        function OpenIframe(){
            for(var i = 0;i < imgs.length;i++){
                imgs[i].addEventListener("click",ImageClick);
            }
        }
        OpenIframe();

        function CloseIframe(){
            closeButton.onclick = function(){
                iFrame.style.width = "0";
                closeButton.style.display = "none";
                arrowRight.style.display = "none";
                arrowLeft.style.display = "none";
            }
        }
        CloseIframe();

        function SlideImageLeft(){
            arrowLeft.addEventListener("click",function(){
                for(var i = 0;i < imgs.length;i++){
                    if(imgs[i].src == imageSwap.src){
                        var x = i;
                        break;
                    }
                }
                if(x == 0)
                    imageSwap.src = imgs[19].src;
                else
                    imageSwap.src = imgs[x-1].src;
            })
        }
        SlideImageLeft();

        function SlideImageRight(){
            arrowRight.addEventListener("click",function(){
                for(var i = 0;i < imgs.length;i++){
                    if(imgs[i].src == imageSwap.src){
                        var x = i;
                        break;
                    }
                }
                if(x == imgs.length - 1)
                    imageSwap.src = imgs[0].src;
                else
                    imageSwap.src = imgs[x+1].src;
            })
        }
        SlideImageRight();
    }
    render() {
        const gallery = this.state.gallery;
        return (
            <GalleryPrototype images={gallery}/>
        )
    }
}