(function () {

  const sumar = (a: number, b: number) : number => a + b;
     
  const nombre = (strNombre : string) : string => `Hola, ${strNombre}`;

  const obtenerSalario = () : Promise<number> => {
       return new Promise((resolve, reject) => {
          resolve(1000);
       });
  }

  console.log(sumar(3, 2));
  console.log(nombre('Ana'));

  obtenerSalario()
       .then( arg => console.log(arg.toFixed(6)))
       .catch(console.warn);
})();
