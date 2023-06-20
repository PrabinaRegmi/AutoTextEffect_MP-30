const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = " The Web Developer";
let speed = 300/ speedEl.value ;
console.log(speed);

let idx = 1;

writeText();

function writeText(){

textEl.innerText = "I am Prabina" + text.slice(0, idx);

idx ++

if(idx > text.length){
    idx=1
}

setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => {
    speed = 300/ e.target.value;
    console.log(speed);
});