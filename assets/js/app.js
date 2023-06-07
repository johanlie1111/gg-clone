// const obj = {
//     name: "QUANG",
//     phone: "123"
// }
// console.log(obj)

// const arr= [vip]

const btnMic = document.querySelector(".icon-right")
const acb = document.querySelector(".number")
const bar = document.querySelector(".nav-icon")

console.log(bar);

btnMic.onclick=function(){
    btnMic.classList.toggle("red")
    acb.innerHTML="con cac"
}

bar.onclick=function(){
    bar.classList.toggle("app")
    
}











