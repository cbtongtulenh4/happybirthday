function firework(){
    const section = document.querySelector('.section-four');
    const bang = document.createElement('div');
    bang.className = "firework"; 

    bang.style.left = (Math.random() * (screen.width/2)) + (screen.width/4) + 'px';
    bang.style.top = (Math.random() * (screen.height/2)) + (screen.height/4)  + 'px';

    var stylesheet = document.createElement('style');
    var result = ``;

    for(var i = 1; i <= 50; i++){
      const part = document.createElement('i');
      part.className = "part";
      bang.appendChild(part);

      var style = `
        .part:nth-of-type(` + i + `){
          transform: translate3d(` 
            + (Math.floor(Math.random()*190) - 100) + `px,`
            + (Math.floor(Math.random()*200) - 100) + `px,
              0
          )
          rotate(` + Math.floor(Math.random()*360) + `deg);
          background: hsla(` + Math.floor(Math.random()*360) + `, 100%, 50%, 1);
        }`
        result += style;
    }

    stylesheet.innerText = result;
    document.head.appendChild(stylesheet);
    section.appendChild(bang);

    // setTimeout(() => {
    //   bang.remove()
    //   stylesheet.remove()
    // }, 10000)

  }
// setInterval(firework, 800);



const imageImgFly = [
    'img/ball1.png',
    'img/rope1.png',
    'img/rope2.png',
    'img/rope3.png',
    'img/rope4.png',
    'img/star1.png',
    'img/star2.png',
    'img/star3.png'
]


function createImgFly(){
    const section = document.getElementById('section-4');
    const square = document.createElement('span');
    square.className = 'icon-decorator';

    var size = Math.random() * 10;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * section.offsetHeight + 'px';
    square.style.left = Math.random() * section.offsetWidth + 'px';

    const indexImg = imageImgFly[Math.floor(Math.random() * imageImgFly.length)];
    square.style.background = "url("+ indexImg +")";
    square.style.backgroundPosition = "center center";
    square.style.backgroundRepeat = "no-repeat";
    square.style.backgroundSize = "cover";
    square.style.zIndex = Math.random() * 3;

    section.appendChild(square);

    setTimeout(()=>{
        square.remove()
    }, 5000)

}


