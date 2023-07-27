// let arrayA=[];
// let arrayB=[1,2,3]
// function mostrarLista(datos) {

//         datos.map((e)=>console.log(e))
//         if (e.length()=0) {
//             console.log("Lista vacia");
//         }
//     }
// mostrarLista(arrayA)

//EJERCICIO 2 - CLASES

//TERMINAR

// class User {
//   constructor(name, surname, books, pet) {
//     this.name = name;
//     this.surname = surname;
//     this.books = books;
//     this.pet = pet;
//   }
//   getFullName(){
//     return console.log(`El nombre es ${this.name} ${this.surname}`);
//   }
// }

// const Juanse = new User(
//   "Juanse",
//   "Patritti",
//   [{ titulo: "El señor de los anillos",
//     autor:"asd" },
//     {titulo: "El señor de los anillos2",
//     autor:"asd" }],
//   ["Juancito"]
// );

// Juanse.getFullName()

//EJERCICIO 3
//UTILIZACION ECMASCRIPT 6-9
// const objetos =  [
// 	{
// 		manzanas:3,
// 		peras:2,
// 		carne:1,
// 		jugos:5,
// 		dulces:2
// 	},
// 	{
// 		manzanas:1,
// 		sandias:1,
// 		huevos:6,
// 		jugos:1,
// 		panes:4
// 	}
// ]

// const newArray=[]
// objetos.map((obj)=>{
//     const valores= Object.keys(obj)
//    valores.forEach((valor)=>{
//     if (!newArray.includes(valor)) {
//         newArray.push(valor)   
//     }
//    })
// })

// console.log(newArray);

// let newArray = [];

// objetos.forEach((objets) => {
//   const values = Object.keys(objets);
//   values.forEach((value) => {
//     if (!newArray.includes(value)) newArray.push(value);
//   });
// });
// console.log(newArray);

// SOLUCION CHATGPT

// const objetos = [
//     {
//         manzanas: 3,
//         peras: 2,
//         carne: 1,
//         jugos: 5,
//         dulces: 2
//     },
//     {
//         manzanas: 1,
//         sandias: 1,
//         huevos: 6,
//         jugos: 1,
//         panes: 4
//     }
// ];

// const newArray = [...new Set(objetos.flatMap(obj => Object.keys(obj)))];

// console.log(newArray);

// DESAFIO CLASE MANEJO DE ARCHIVOS
// const mostrarLetras = (string)=>{
//     const str= string
// const timer= str.length*1000
// const muestra = setInterval(() => {
//     console.log(string);
// }, 250);
//         separadorDeLetras(str)


// ;
// ;
// }
// const separadorDeLetras = (string)=>{

//  setInterval(() => {
//     for (let i = 0; i < string.length; i++){
//    let letter = string[i]
//     console.log(letter)
//     }
// }, 1000);
// }
   


// separadorDeLetras("hola")

// let contador = 0


// const mensaje = "¡Hola mundo!";

// const fin = () => console.log('terminé');
// let indice = 0;

// const intervalo = setInterval(() => {
//   if (indice < mensaje.length) {
//     console.log(mensaje[indice]);
//     indice++;
//   } else {
//     clearInterval(intervalo);
//     fin();
//   }
// }, 1000);

 
let numeros=[]
const randomNumber = () => Math.round(Math.random()*20+1)

const saveNumber = (number) =>{
    
}  

// SOLUCION COMPAÑERO 1:
// const numbers = {};
// for (let i = 0; i <= 10000; i++) {
//   let temp = getRandomIntInclusive(1, 20);
//   if (numbers[temp] == undefined) {
//     numbers[temp] = 1;
//   } else {
//     numbers[temp] += 1;
//   }
// }

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(numbers);

// COMPAÑERO 2:
// function generarNumerosRandom() {
//     const min = 1;
//     const max = 20;
//     const cantidadNumeros = 10000;
//     const numerosRandom = [];
  
//     for (let i = 0; i < cantidadNumeros; i++) {
//       const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
//       numerosRandom.push(numeroRandom);
//     }
  
//     return numerosRandom;
//   }
  
//   function contarRepeticiones(numeros) {
//     const contador = {};
//     numeros.forEach(numero => {
//       contador[numero] = (contador[numero] || 0) + 1;
//     });
//     return contador;
//   }
  
//   const numerosGenerados = generarNumerosRandom();
//   const contadorNumeros = contarRepeticiones(numerosGenerados);
//   console.log(numerosGenerados);
//   console.log(contadorNumeros);
// COMPAÑERO 3 - MAL HECHO
// const numbers = [
//     {
//       number: 0,
//       count: 0,
//     },
//   ];
  
//   for (let i = 0; i < 10; i++) {
//     let num = Math.floor(Math.random() * 20);
  
//     numbers.forEach((element) => {
//       if (element.number === num) {
//         element.count++;
//       } else {
//         numbers.push({
//           number: num,
//           count: 1,
//         });
//       }
//     });
//   }
  
//   console.log(numbers);

// EJERCICIO 3
const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const getName = () => productos.map((p)=>p.nombre).join(", ")

console.log(getName());
const names = productos.map((producto) => producto.nombre).join(", ");

const menorPrecio = () =>productos.map((e)=>{
    if (e.precio) {
        
    }
    e.precio
})