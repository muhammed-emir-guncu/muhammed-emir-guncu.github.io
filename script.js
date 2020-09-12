var a=["nasa","duz dunya","kure dunya","kuantum","fizik","yasam","nasa"];
var b=["guzel","kotu","mantikli","mantiksiz","cirkin"];
var c=["gercek","yalan","duzmece","sey"];
function bas(){
document.getElementById("text").innerHTML =a[Math.floor(Math.random() * a.length)]+" "+b[Math.floor(Math.random() * b.length)]+" bir "+c[Math.floor(Math.random() * c.length)] ;
};
bas();
