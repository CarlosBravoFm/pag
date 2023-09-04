const fs = require ('fs/promises');
//
//const fs = require ("fs");
//funciones flechas
() =>{

}

//fs.writeFile('./text1.txt', 'lines de codigo no 1', (error) => {
//   if(error){
//       console.log(error)
//   } else {
//           console.log('archivo creado');
//       }
//  })
    



fs.writeFile('./text1.txt', 'lines de codigo no 1'),
    .then(() => {console.log('archivo creado')})
    .catch((error) => {console.log(error)})

console.log('archivo creado');
    


