/*
let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
setInterval(()=>{
    let currentTime=new Date();
    hrs.innerHTML=currentTime.getHours();
    min.innerHTML=currentTime.getMinutes();
    sec.innerHTML=currentTime.getSeconds();
},1000)
/*
new Date()- current date,time,day,etc.
new Date().getHours(),.getMinutes(),.getSeconds()
*/
const hrs=document.getElementById("hrs");
const min=document.getElementById("min");
const sec=document.getElementById("sec");
setInterval(()=>{
    let date= new Date();
    hrs.innerHTML=date.getHours();
    min.innerHTML=date.getMinutes();
    sec.innerHTML=date.getSeconds();
},1000);