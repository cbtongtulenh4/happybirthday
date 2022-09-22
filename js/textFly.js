const text = document.querySelector('.text-letter');
const container = document.getElementById('card-inside');
text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");



function goOut(){
    const animation = anime.timeline({
        targets: '.text-letter .letter',
        easing: 'easeInOutExpo',
        loop: false,
    });
    animation
        .add({
            rotate: function(){return anime.random(-10, 10)},
            translateX: function(){return anime.random(-100, 150)},
            translateY: function(){return anime.random(-150, 300)},
            duration: 5000,
            delay: anime.stagger(20)
        });
    
}

function goIn(){
    const animation1 = anime.timeline({
    targets: '.text-letter .letter',
    easing: 'easeInOutExpo',
    loop: false,
    });
        animation1
    .add({
        rotate: 0,
        translateX: 0,
        translateY: 0,
        duration: 5000,
        delay: anime.stagger(20)
    })
}