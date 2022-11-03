console.log("Empezamos")


//

var antes = "antes se usaba más";
let primer = "primera variable";
const estatico ="Soy un contenedor estatico";

//SCOPE

var a = 100;
console.log("Por fuera equivalgo a:"+a);

function ambito(){
    console.log("Sigo valiendo: "+a);

    var a = 80;

    console.log("3.Ahora valgo: "+a);
}

console.log(ambito());
console.log(a);
let abc = 0;

while(abc){
    console.log("Me ejecuto");
}//infinito

let nombres=['Jose','Juan','Maria','Valvez'];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]); 
}

let apellidos=['Jose','Juan','Maria','Valvez'];

