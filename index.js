let btn=document.getElementById("bttn");
const randomcolor=()=>{
    let variable="0123456789ABCDEf";
    let cons="#";
    for(let i=0;i<6;i++){
        cons=cons+variable[Math.floor(Math.random()*16)]
    }
    return cons
}
console.log(randomcolor());
function changerandomcolor(){
    document.body.style.backgroundColor=randomcolor();
}
btn.addEventListener("click",changerandomcolor)