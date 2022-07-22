const name = prompt("Your name")
console.log(name)
alert(`Hello! ${name}`);



const arr1 = ["moon", 32, 56, 'number'];
const arr2 = [12, 1,5];
console.log(arr1.length)
console.log(arr2.length)

var x = "color"
    switch(x){
        case 1:  alert("red");
        break;
        case 2:  alert("yellow");
        break;
        case 3:  alert("green");
        break;

}



var prd=2,                 /* время показа сигналов в секундах */
    ylz=10,                /* количество повторений желтого */
    ylz_speed=0.25,        /* скорость отсчета желтого в секундах */
    to='',                 /* таймаут */
    lights=[],             /* дивы */
    dr='dwn';              /* направление (какое направление? очень плохая музыка!) */

function trafficlite(n){
/* на всякий случай */
clearTimeout(to);
var n=arguments[0]||0,
    y=arguments[1]||0;

[].forEach.call(lights,function(k,i){k.className=i!=n?'blk':'';});

switch(n){
case 0:
case 2:  n < 1?(n++,dr='dwn'):(n--,dr='up');
         to=setTimeout('trafficlite('+n+')',prd*1000);
         break;
case 1:  to=setTimeout(
         function(){
         y < ylz ?
         (trafficlite(n,y+1),lights[n].innerHTML=y+1)
         :
         (lights[n].innerHTML='',dr=='dwn'?n++:n--,trafficlite(n))
         },ylz_speed*1000);
         break;
default:;
}
}

onload=function(){
lights=document.querySelectorAll('div');
trafficlite();
}