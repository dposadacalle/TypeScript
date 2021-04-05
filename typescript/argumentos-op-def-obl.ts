(function (){
    
   function activar(quien    : string, 
                    objeto   : string = 'Batiseñal', 
                    momento  ?: string){ // Argumento Opcional ?: 

        if(!momento){
            console.log(`${ quien } activó la ${ objeto }`);
        }else{
            console.log(`${ quien } activó la ${ objeto } en la ${ momento }`);
        }

        
   }

   activar('Gordon', 'Batiseñal', 'Tárde');

    
})(); 




