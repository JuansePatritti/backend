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

class ProductManager {
    constructor(){
        this.products=[]
        this.incremental=0
    }
    addProduct(title, description,price,thumbnail,code,stock){
         if (title,description,price,thumbnail,code,stock==null||undefined){
            return console.log(`No se pudo agregar el producto ${title}, ya que no se completaron todos los datos`);
        }
        
       if (this.products.find((e)=>e.code==code)) {
       return console.log(`Error, ya existe un producto con el código ${code}`)
       }
       
        this.products.push({
            title:title,
            description:description,
            price:price,
            thumbnail:thumbnail,
            code:code,
            stock:stock,
            id:this.incremental++
        })
       
    }

    getProducts(){
        return console.log(this.products);
    }
    getProductById(id){
      const product=this.products.find((prod)=>prod.id===id);

       if(product){
        console.log(product);
       }
       else{
        console.log(`No se encontró el producto con el id ${id} `);
       }
    }

}
const Juanse= new ProductManager
Juanse.addProduct(
    "Pera", "sabrosas",10,"ruta1",15,10
)
Juanse.addProduct(
    "Manzana", "sabrosas",11,"ruta2",16,11
)
Juanse.addProduct(
    "Sandia", "gigantes",12,"ruta3",17,12
)
Juanse.addProduct(
    "Melon", "gigantes",12,"ruta3",16,12
)
Juanse.addProduct(
    "Queso", 12,"ruta3",16,12
)

Juanse.getProducts()
Juanse.getProductById(1)
Juanse.getProductById(4)
