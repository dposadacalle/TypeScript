(function (){
        
   class Avenger{
        
        private nombre         :   string;
        private equipo         :   string;
        private nombreReal     :   string;
        private puedePelear    :   boolean;
        private peleasGanadas  :   number;   

        constructor(nombre: string, equipo:string, nombreReal:string){
            this.equipo = equipo;
            this.nombre = nombre;
            this.nombreReal = nombreReal;
            this.puedePelear = false; 
            this.peleasGanadas = 0;        
        }
   }

   const antman = new Avenger('ironman', 'XXX', 'Luis Perez');

   console.log(antman);


})(); 




