const colors= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');




btn.addEventListener('click', function(){
    let hex = "#"
    function getRandomNumber(){
        return (Math.floor(Math.random() * colors.length));
    }
    for (let i = 0; i<=5; i++){
        hex += colors[getRandomNumber()]
    }
    console.log(hex)
    
    color.innerHTML= hex;
    document.body.style.backgroundColor = hex;   
})