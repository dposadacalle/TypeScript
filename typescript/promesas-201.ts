(function (){
    
    const retirarDinero = (montoRetirar: number) : Promise<number> => {
        
        let dineroActual = 1000;

        return new Promise((resolve, reject) => {
            if(montoRetirar >= dineroActual){
                reject('Fondos Insuficientes')
            }else{
                dineroActual -= montoRetirar; // dineroActual = DineroActual - montoActual

                resolve(dineroActual);
            }      
        });
    }
    

    retirarDinero(200)
        .then(saldoActual => console.log(`Saldo actual es de: ${saldoActual}`))
        .catch(err => console.warn(err));
})(); 




