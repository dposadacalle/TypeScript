"use strict";
(function () {
    const sumar = (a, b) => a + b;
    const nombre = (strNombre) => `Hola, ${strNombre}`;
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve(1000);
        });
    };
    console.log(sumar(3, 2));
    console.log(nombre('Ana'));
    obtenerSalario()
        .then(arg => console.log(arg.toFixed(6)))
        .catch(console.warn);
})();
