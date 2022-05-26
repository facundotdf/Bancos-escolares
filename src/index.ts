let array = [40,35,30];
let valorTeclado = prompt('Ingrese un valor: ');
let aux = array[0] - valorTeclado;
let indice = 0;
for (let index = 1; index < array.length; index++){
    if ( (aux > ( array[index] - valorTeclado) ) && ( (array[index] - valorTeclado) >= 0) ) {
        indice = index; //aula
        aux = array[index] - valorTeclado;
    }
}

switch (indice){
   case 0: console.log('Azul');
    break;
   case 1:console.log('Verde');
    break;
   case 2:console.log('Amarillo');
    break;