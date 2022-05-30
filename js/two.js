
const image1 = document.getElementById("image-2-1");

createBlock(image1);

// create pieces of image
function createBlock(image){
    for (var i = 0; i<=285; i++)
    {
        let block = document.createElement('div');
        block.classList.add('block');
        image.appendChild(block);
    }
}


let block1 = image1.getElementsByTagName('div');

image1.addEventListener('click', async function(){
    if(block1[0].style.backgroundImage.slice(4, -1).replace(/"/g, "") == "img/5.jpg") return;
    let animation = anime.timeline
    ({
        targets: block1,
        easing: 'easeInOutExpo',
        loop: false,
        delay: anime.stagger(10, {start:50})
    })
    animation
    .add
    ({
        scale: 0,
        translateX: function(){ return anime.random(360,2100);},
        translateY: function(){ return anime.random(360,-2100);},
        rotate: function(){ return anime.random(-360,360);},
        duration: function(){ return anime.random(500,3000);}
    })

    await sleep(5000);
    for (var i = 0; i<=285; i++)
    {
        block1[i].style.background = "url(img/5.jpg)";
        block1[i].style.backgroundAttachment = "fixed";
        block1[i].style.backgroundPosition = "center";
        block1[i].style.backgroundSize = "cover";
    }

    animation = anime.timeline
    ({
        targets: block1,
        easing: 'easeInOutExpo',
        loop: false,
        delay: anime.stagger(10, {start:50})
    })
    animation
    .add
    ({
        scale: 1,
        translateX: 0,
        translateY: 0,
        rotate: 0,
        duration: function(){ return anime.random(500,3000);}
    })

}, false);


// let block1 = image1.querySelectorAll('.img-birth-2 .image-1 .block');
// let block2 = image2.querySelectorAll('.img-birth-2 .image-2 .block');
