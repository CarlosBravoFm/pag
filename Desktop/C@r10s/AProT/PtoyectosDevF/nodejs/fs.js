const fs = require(`fs`);

fs.writeFile(`./test1.css`, `linea de codigo no 1`, function (error) {
    if(error){
        console.log(error)
    } else {
        console.log(`archivo creado`);
    }
})

console.log(`ultima linea de codigo`)



