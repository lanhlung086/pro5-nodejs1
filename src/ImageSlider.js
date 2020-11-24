import React from 'react';

export default function ImageSlider() {
    let iFrame = document.getElementById("iframe");

    let imageSwap = document.getElementById("image-swap");
    let imgs = document.getElementsByClassName("images");
    let arrowLeft = document.getElementById("arrow-left");
    let arrowRight = document.getElementById("arrow-right");
    let closeButton = document.getElementById("close-button");

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