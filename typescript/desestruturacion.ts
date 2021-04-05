(function (){
    
  // Destruccion de Objetos y Arreglos
    
  // Destruracion en Objetos

    const avenger = {
        nombre: 'Steve', 
        clave: 'Capitan America', 
        poder: 'Droga'
    }

    const extraer = ({nombre, poder}: any) => {
        // const {nombre, clave, poder} = avenger;

        console.log(`${ nombre } \n${ poder }`);
    }

    extraer(avenger);

    
    // Destruracion Usando Arreglos 
    const avangers : string[] = ['Thor', 'Ironman', 'Spiderman'];

    // const [thor, ironman, spiderman] = avangers;

    // const [, , spiderman] = avangers;

    // console.log(`${ thor } \n${ ironman } \n${ spiderman }`);


    const extraerArray = ([, , spiderman]: string[]) => {
        console.log(`\n${ spiderman }`);
    };

    extraerArray(avangers);
    
})(); 




