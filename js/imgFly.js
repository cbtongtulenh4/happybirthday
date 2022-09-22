const images = [
    'img/1.jpg',
     'img/2.jpg',
     'img/3.jpg',
     'img/4.jpg',
     'img/5.jpg',
     'img/7.jpg',
     'img/8.jpg',
     'img/9.jpg',
     'img/10.jpg',
     'img/11.jpg',
     'img/12.jpg',
     'img/13.jpg',
     'img/14.jpg',
     'img/15.jpg',
     'img/16.jpg',
     'img/17.jpg',
     'img/18.jpg'
]

function createSquareImg(){

    const section = document.querySelector('.section-four');
    const square = document.createElement('span');
    square.className = "square-fly";

    var size = Math.random() * 10;

    square.style.width = 100 + size + 'px';
    square.style.height = 100 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const indexImg = images[Math.floor(Math.random() * images.length)];

    square.style.background = "url("+ indexImg +")";
    square.style.backgroundPosition = "center center";
    square.style.backgroundRepeat = "no-repeat";
    square.style.backgroundSize = "cover";

    section.appendChild(square);

    setTimeout(()=>{
        square.remove()
    }, 5000)

}

