
function createImg(totalImg, location, nameClass){
    // const container = document.querySelector(location);
    const container = document.getElementById(location);
    for(i = 1; i < totalImg + 1; i++){
        const img = document.createElement('img');
        img.src = "img/cake/"+ i +".png";
        img.className= nameClass + " none";
        container.appendChild(img);
    } 
}    

function animation(totalImg, location, nameClass){
    // const images = document.querySelector('#'+location).querySelectorAll('.cake');
    createImg(totalImg, location, nameClass);
    const images = document.getElementById(location).children;
    var i = 0;
    setInterval(function(){
        if(i > 0){
            images[i-1].classList.add("none");
        }else{
            images[totalImg-1].classList.add("none");
        }
        images[i++].classList.remove('none');
        if(i == totalImg) i = 0;
    }, 120)
}