(function (){
    function saludar( nombre: String ) {
        console.table( 'Hola ' + nombre ); // Hola Logan
    }

    const wolverine = {
        nombre: 'Logan'
    };
    
    saludar( wolverine.nombre );

    // Variables Let y Const

    let msg = 'Juan';

    if(true){
        let msg = 'Maria';
    }

    console.log(msg);

    // Tipos de datos

    let mensaje2: string = 'Hola';
    let numero: number = 20;
    let sw: boolean = true;
    let fechaHoy: Date = new Date();

    // let cualquierCosa: string | number | Date;  // Tipo Any
    let cualquierCosa;
    cualquierCosa = mensaje2; 
    cualquierCosa = numero;
    cualquierCosa = sw; 
    cualquierCosa = fechaHoy;
    
    let spiderman = {
        nombre: 'Peter', 
        edad: 30
    }

    spiderman = {
        nombre: 'Juan', 
        edad: 45
    }


})();




