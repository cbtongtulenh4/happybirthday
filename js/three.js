const colors = [
    '#74ff1d',
    '#e91e63',
    '#ffeb3b',
    '#2196f3'
]

const zIndex = [
    '-1',
    '0',
    '2',
    '100'
]

function createSquare(){

    const section = document.querySelector('.section-three');
    const square = document.createElement('span');
    square.className = "square-fly";

    var size = Math.random() * 10;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';
    square.style.zIndex = zIndex[Math.floor(Math.random() * colors.length)];

    const indexColor = colors[Math.floor(Math.random() * colors.length)];

    square.style.background = indexColor;

    section.appendChild(square);

    setTimeout(()=>{
        square.remove()
    }, 5000)

}


    var checkPass = document.getElementById('passIP');
// checkPass.addEventListener('keydown', function(event){
//     if (event.keyCode === 13) {
//         var input = checkPass.value;
//         if(input.toLowerCase() === "giao phai"){
//             window.console.log("abc true");
//         }
//     }
// });

function test(){
    var input = checkPass.value;
    if(input.toLowerCase() === "phuc"){
        document.getElementById('pass').style.display = "none";
        goIn();
    } else{
        window.alert("Haizz! You didn't remember me T_T");
    }
}
