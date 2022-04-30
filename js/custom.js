// import { snow } from "./module.js";

const goButton1 = document.getElementById('go-button-1');
const goButton2 = document.getElementById('go-button-2');
const goButton3 = document.getElementById('go-button-3');
const section1 = document.getElementById('section-1');
const section2 = document.getElementById('section-2');
const section3 = document.getElementById('section-3');
const section4 = document.getElementById('section-4');


var stylesheet = document.createElement('style');

var createSquareInterval = null;


window.onload = function(){
  setTransformAnimation();
  initialize();
};


goButton1.addEventListener('click', async function(){
    
//    location.href = '#section-2';
    section2.style.display = 'block';
    snow(200, "section-2");
    window.scrollTo(0, section2.offsetTop)
    section2.querySelector('.img-box').classList.add('active');
    await sleep(1000);
    section1.style.display = "none";
}, false);

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}



goButton2.addEventListener('click', async function goLeft(){
    goOut();
    createSquareInterval = setInterval(createSquare, 150);
    section3.style.display = 'flex';

    section2.classList.add('ab-2');
    section3.classList.add('ab-3');

    await sleep(3000);
    section2.style.display = "none";
    section3.classList.remove('ab-3');
 

}, false);


goButton3.addEventListener('click', async function(){

  section4.style.display = 'block';
  // call animate of section 4
  // animation(40, "box-cake", "cake img");
  
  // createImgFly();
  setInterval(createImgFly, 500);// 200

  // createSquareImg();
  setInterval(createSquareImg, 2500);

  section3.style.animation = "CenterToRight 3s forwards";
  section4.style.animation = "LeftToCenter 3s forwards";


  await sleep(3000);
  section3.style.display = "none";
  clearInterval(createSquareInterval);
  section4.style.animation = null;
}, false);




function setTransformAnimation(){
    const content = document.getElementById('wrapper');
    var widthContent = content.offsetWidth;

    var style = `
      @keyframes RightToCenter {
        0%{
          transform: translateX(`+ widthContent +`px) translateY(-100vh);
        }
        100%{
          transform: translateX(0) translateY(-100vh);
        }
      }
      
      @keyframes CenterToLeft {
          0%{
            transform: translateX(0);
          }
          100%{
            transform: translateX(`+ -widthContent +`px);
          }
      }

      @keyframes LeftToCenter {
        0%{
          transform: translateX(`+ -widthContent +`px) translateY(-100vh);
        }
        100%{
          transform: translateX(0) translateY(-100vh);
        }
      }

      @keyframes CenterToRight {
        0%{
          transform: translateX(0);
        }
        100%{
          transform: translateX(`+ widthContent +`px);
        }
    }
    
    `;

    stylesheet.innerHTML = style;
    document.head.appendChild(stylesheet);

}

function initialize(){
  section3.style.display = 'none';
  section4.style.display = 'none';
  section2.style.display = 'none';
}

