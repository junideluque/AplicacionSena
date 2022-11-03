function division(num1, num2){
    console.log("La division es: ", num1/num2) 
}
division(50,10)
//FileSystem
//En este apartado estamos leyendo un archivo que se encutra en formato txt
 const fs= require("fs");
 const primerTxt = fs.readFileSync("./archivo/text.txt","utf-8");
 console.log(primerTxt)
//en esta seccion estamos insertando un texto un archivo de texto ya existente.
 let content ="Hola, esta linea no se encuentra en el texto normal, es añadida por js ||";
 fs.writeFileSync("./archivo/text2.txt",content,{flag:"a"});



 //Crearemos una promesa que devolvera un archivo
 function getText(pathFile) {
    return new Promise( (resolve,reject) => {
        fs.readFile(pathFile, "utf-8",(err,data) =>{
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
 }

 getText("./archivo/text2.txt").
    then((result)=> {
        console.log(result);
    })
    .catch((error)=>{
        console.log(error)
    })