

let pupils = document.getElementsByClassName('point');
console.log(pupils);
let pupilsArr = Array.from(pupils);


//pupil

let pupilStartPoint = -10;
let pupilRange = 18;


//mouse X POSITION
let startXpoint = 0;

let endXpoint = window.innerWidth;
let currentXposition = 0;
 let fractXvalue = 0;

 //MOUSE Y POSITION

let endYpoint = window.innerHeight;
let currentYposition = 0;
 let fractYvalue = 0;
 
 let mouseXrange = endXpoint - startXpoint;


 const mouseMove = (event) => {
    currentXposition = event.clientX - startXpoint;
    fractXvalue = currentXposition / mouseXrange;
    
    currentYposition = event.clientY;
    fractYvalue = currentYposition / endYpoint;
    
    pupilsArr.forEach((curPupil) => {
      let pupilXCurrentPosition = pupilStartPoint + (fractXvalue * pupilRange);
      let pupilYCurrentPosition = pupilStartPoint + (fractYvalue * pupilRange);
      
      curPupil.style.transform = `translate(${pupilXCurrentPosition}px, ${pupilYCurrentPosition}px)`;
      console.log(`${pupilXCurrentPosition}px, ${pupilYCurrentPosition}px`);
    });
  };
  

    
    
    
    
    

const windowResize = (event) =>{
    endXpoint = window.innerWidth;
     mouseXrange = endXpoint - startXpoint;
     endYpoint = window.innerHeight;

    
}
window.addEventListener('mousemove',mouseMove);
window.addEventListener("resize",windowResize);