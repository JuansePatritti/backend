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