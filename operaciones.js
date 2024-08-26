const fs = require('fs')

function registrar(nombre, edad, animal, color, enfermedad){
    const nuevaCita = {
       nombre,
       edad,
       animal,
       color,
       enfermedad
    };

    // Leer el archivo citas.json
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) throw err;
        let citas = JSON.parse(data);

        // Agregar la nueva cita al arreglo
        citas.push(nuevaCita);

        // Escribir el arreglo actualizado en citas.json
        fs.writeFile('citas.json', JSON.stringify(citas, null, 2), (err) => {
            if (err) throw err;
            console.log('Cita registrada con éxito.');
        });
    });
}

module.exports = { registrar };

function leer() {
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) throw err;
        const citas = JSON.parse(data);
        console.log(citas);
    });
}

module.exports.leer = leer;
