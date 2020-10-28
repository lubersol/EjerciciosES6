//EJERCICIOS REPASO JSES6


// 1 - Haz una función capaz de revertir el orden de los caracteres de un string dado por un usuario

/*Creo función a la que le paso el parámetro cadena (donde meteré el string al invocarla) y creo variable de un string vacío donde meteré el resultado de la funcion que será el texto invertido.Uso el iterador for para que me devuelva los caracteres invertidos*/

const invertirCadena = cadena => {
    let nuevaCadena = '';
    for (let x = cadena.length - 1; x >= 0; x--) {
      nuevaCadena += cadena[x];
    }
    return nuevaCadena;
  }
  invertirCadena('hola');
  console.log(invertirCadena('hola'))
  //2 - Construye una funcion que sea capaz de comprobar si una variable es un array o no lo es.
  
  let arr = [1, 2, 3];
  let resultado = Array.isArray(arr);
  
  console.log(resultado);
  
  //3 - Funcion capaz de clonar un array. Creo array vacío donde estará la copia una vez ejecute el bucle for. Lo inicializo en 0, le doy la condición de que incremente uno cada vez que vaya recorriendo la longitud del array y me devuelve así sus elementos.
  numbers = [1, 2, 3];
  numbersCopy = [];
  
  for (i = 0; i < numbers.length; i++) {
    numbersCopy[i] = numbers[i];
  }
  console.log(numbersCopy);
  
  //4 - Escribe una función capaz de borrar elementos duplicados del siguiente array.
  /* Filtro los elementos (strings) del array según su índice, y devuelvo solo los q coincida elemento(string) con indice para eliminar duplicados */
  let array1 = ["Lunes", "Martes", "Miércoles", "Lunes", "Jueves", "Viernes", "Viernes", "Sabado", "Domingo"];
  const newArray = array1.filter((elem, index) => array1.indexOf(elem) === index);
  console.log(newArray);
  
  //5 - Escribe una función capaz de concatenar dos arrays.
  /* El método concat sería lo más eficiente para concatenar dos arrays */
  let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let array3 = [10, 11, 2, 3, 4, 12, 13, 14, 15];
  const array4 = array2.concat(array3);
  
  console.log(array4);
  
  //6 - Modifica la función anterior para excluir aquellos elementos que se repitan en el array concatenado.
  
  const removeRepeat = array4.filter((elemento, index) => array4.indexOf(elemento) === index);
  
  console.log(removeRepeat);
  
  //7 - Diseña una función en Javascript que acepte un número como parámetro y compruebe si este número es primo o no.
  
  /* Al llamar a la función, introduzco el parámetro 3 y el resultado es true porque es un número primo. Si el cociente de ese número entre 2 (parámetro que introduzco) es cero, será falso ya que los números primos sólo pueden dividirse por sí mismos y divididos entre 2 no tendrían un cociente cero*/
  
  const primos = (numero) => {
    for (let i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return numero !== 1;
  }
  const result = primos(3);
  console.log(result);
  
  /*8 - Diseña una función en Javascript de tipo promesa que genere un array con 5 números aleatorios, una vez hecho esto, pedirá un número al usuario mediante prompt y comprobará si el número introducido coincide con uno de los 5 generados aleatoriamente por el array. en caso de coincidir devolverá un resolve, caso contrario reject. El espectro de los números tanto aleatorios como el introducido por el usuario será del 1 al 10.*/
  
  const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);
    let numeroUsuario = parseInt(prompt('Dime un número'));
    if (numeroUsuario === resultado[0] || numeroUsuario === resultado[1] || numeroUsuario === resultado[2] || numeroUsuario === resultado[3] || numeroUsuario === resultado[4]) return ('Has acertado!');
  
    promise
      .then(number => console.log(number))
      .catch(error => console.error(error))
  });