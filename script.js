let lineSquares=prompt("How many squares in each row");
if(lineSquares>100){
    lineSquares=100;
}
const size=(960/lineSquares)+"px";


const container=document.querySelector(".container");
let toggle=false;
container.addEventListener("mousedown",()=>{
    toggle=true;
})
container.addEventListener("mouseup",()=>{
    toggle=false;
})

for(let i=0; i<lineSquares*lineSquares;i++){
    const square=document.createElement("div");
    square.style.backgroundColor=`rgb(${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)},${Math.floor(Math.random()*255+1)})`;
    square.style.opacity=0;
    square.addEventListener("mouseover",(e)=>{
        if(toggle==false || square.style.opacity>=1){
            return;
        }
        square.style.opacity=Number(square.style.opacity)+0.1;
    })
    square.style.width=size;
    square.style.height=size;
    container.appendChild(square);
}
