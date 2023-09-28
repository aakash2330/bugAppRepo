
import { useEffect } from "react";
import logo from "../assets/bugLogo.png";
import logo2 from "../assets/bugLogo2.png";
import './bugLogo.css'

export default function BugLogo(){


useEffect(()=>{
    const logo = document.getElementById("logo"),
      images = logo.querySelectorAll("img");

const getActive = () => document.body.dataset.active === "true",
      setActiveTo = active => document.body.dataset.active = active;

const shift = (image, index, rangeX, rangeY) => {
  const active = getActive();
        
  const translationIntensity = active ? 24 : 4,
        maxTranslation = translationIntensity * (index + 1),
        currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;
  
  const scale = active ? 1 + (index * 0.4) : 1;
  
  image.animate({ 
    translate: currentTranslation, 
    scale 
  }, { duration: 750, fill: "forwards", easing: "ease" });
}

const shiftAll = (images, rangeX, rangeY) => 
  images.forEach((image, index) => shift(image, index, rangeX, rangeY));

const shiftLogo = (e, images) => {  
  const rect = logo.getBoundingClientRect(),
        radius = 1000;
  
  const centerX = rect.left + (rect.width / 2),
        centerY = rect.top + (rect.height / 2);
  
  const rangeX = (e.clientX - centerX) / radius,
        rangeY = (e.clientY - centerY) / radius;
  
  shiftAll(images, rangeX, rangeY);
}

const resetLogo = () => {
  setActiveTo(false);
  shiftAll(images, 0.4, -0.7);
}

window.onmousemove = e => shiftLogo(e, images);

// document.body.onmouseleave = () => {
//   if(!getActive()) resetLogo();
// }

// window.onmousedown = e => {
//   setActiveTo(true);
//   shiftLogo(e, images);
// }

// window.onmouseup = e => resetLogo();

// resetLogo();
})



    
    return (
        <>
        <div id="logo">
  <img id="logo1" src={logo} draggable="false" />
  <img id="logo2" src={logo} draggable="false" />
  <img id="logo3" src={logo} draggable="false" />
  <img id="logo4" src={logo} draggable="false" />
  <img id="logo5" src={logo2} draggable="false" />
</div>
        </>
    )
}