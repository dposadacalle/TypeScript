(function (){
        
    // Interface: Tipos de datos Genericos (Contratos a implementar en clases)
    // forma de definir reglas
    interface IXmen{
        nombre: string;
        edad: number;
        poder ?: string;
    }
    
    const enviandoMision = ( xmen : IXmen ) => {
        console.log(`Enviando a ${xmen.nombre} a la Misión`);
    }

    const regresarAlCuartel = ( xmen : IXmen ) => {
        console.log(`Regresando a ${xmen.nombre} al Cuartel`);
    }

    const wolverine : IXmen = {
        nombre: 'Logan', 
        edad: 60
    }

    enviandoMision(wolverine);
})(); 




