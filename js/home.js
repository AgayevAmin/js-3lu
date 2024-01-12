/////////////////1////////////////////////


var a=5
var b=6
var c=7
var p=(a+b+c)/2
var s=Math.sqrt(p*(p-a)*(p-b)*(p-c))
console.log(s)

/////////////////1////////////////////////


///////////////////2//////////////////////
///sey seye varyant///
// var a=+prompt("eded daxil et a")
// var b=+prompt("eded daxil et b")
// var hasil=a*b
// var bolme=a/b
// console.log(hasil)
// console.log(bolme)
///esas varyant ///
var btnHasil = document.querySelector(".hasil")
var btnQismet = document.querySelector(".qismet")



btnHasil.addEventListener("click" , function(e){
    e.preventDefault()
    var a = document.querySelector("#number1").value
    var b = document.querySelector("#number2").value

    var hasil = a * b
    console.log(hasil);
   var hasilcavab=document.querySelector(".eded1")
   hasilcavab.textContent=hasil

})


btnQismet.addEventListener("click" , function(){
    var a = document.querySelector("#number1").value
    var b = document.querySelector("#number2").value

    var qismet = a / b
    console.log(qismet);


    var bolmecavab=document.querySelector(".eded1   ")
    bolmecavab.textContent=qismet
})




////////////////////3////////////////////////////


// var div=document.getElementById("div")
  
// var  today = new Date()
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log( month[today.getMonth()],",", weekday[today.getDay()],",",today.getDate() )
// document.write( month[today.getMonth()],",", weekday[today.getDay()],",",today.getDate() ) 
// document.write("<br>")
// // document.write( today.getHours(),":",+ today.getMinutes(),":",+today.getSeconds())

// // console.log (today.getHours() + ":"+ today.getMinutes()+':' + today.getSeconds())
 
// var text=document.createElement("h2")

// setInterval(function(){
//     var  today = new Date() 
//     // document.write(today.getHours() + ":"+ today.getMinutes()+':' + today.getSeconds())
//     console.log(today.getHours() + ":"+ today.getMinutes()+':' + today.getSeconds())
    
//  },1000)

////////////////////////3/////////////////