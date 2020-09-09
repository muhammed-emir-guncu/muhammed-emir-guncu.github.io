var a=["1","2","3","4","5","6"];
function bas(){
document.getElementById("text1").innerHTML = a[Math.floor(Math.random()*5)]+" : "+a[Math.floor(Math.random()*5)]+" : "+a[Math.floor(Math.random()*5)];
document.getElementById("text2").innerHTML = a[Math.floor(Math.random()*5)]+" : "+a[Math.floor(Math.random()*5)]+" : "+a[Math.floor(Math.random()*5)];
document.getElementById("text3").innerHTML = a[Math.floor(Math.random()*5)]+" : "+a[Math.floor(Math.random()*5)]+" : "+a[Math.floor(Math.random()*5)];
};
bas();
