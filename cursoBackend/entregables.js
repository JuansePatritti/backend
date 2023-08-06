// DESAFÍO ENTREGABLE 1
//------------------------------


// class ProductManager {
//     constructor(){
//         this.products=[]
//         this.incremental=0
//     }
//     addProduct(title, description,price,thumbnail,code,stock){
//          if (title,description,price,thumbnail,code,stock==null||undefined){
//             return console.log(`No se pudo agregar el producto ${title}, ya que no se completaron todos los datos`);
//         }
        
//        if (this.products.find((e)=>e.code==code)) {
//        return console.log(`Error, ya existe un producto con el código ${code}`)
//        }
       
//         this.products.push({
//             title:title,
//             description:description,
//             price:price,
//             thumbnail:thumbnail,
//             code:code,
//             stock:stock,
//             id:this.incremental++
//         })
       
//     }

//     getProducts(){
//         return console.log(this.products);
//     }
//     getProductById(id){
//       const product=this.products.find((prod)=>prod.id===id);

//        if(product){
//         console.log(product);
//        }
//        else{
//         console.log(`No se encontró el producto con el id ${id} `);
//        }
//     }

// }
// const Juanse= new ProductManager
// Juanse.addProduct(
//     "Pera", "sabrosas",10,"ruta1",15,10
// )
// Juanse.addProduct(
//     "Manzana", "sabrosas",11,"ruta2",16,11
// )
// Juanse.addProduct(
//     "Sandia", "gigantes",12,"ruta3",17,12
// )
// Juanse.addProduct(
//     "Melon", "gigantes",12,"ruta3",16,12
// )
// Juanse.addProduct(
//     "Queso", 12,"ruta3",16,12
// )

// Juanse.getProducts()
// Juanse.getProductById(1)
// Juanse.getProductById(4)





// DESAFIO ENTREGABLE 2
//------------------------------




const fs = require('fs')
 class Contenedor{
     constructor(path){
         this.path=path,
         this.id=0
         this.contenido=[]
     }
     async save(obj) {
        try {
           const objects = await this.getObjects()
           const nuevoID= ++this.id
          obj.id = nuevoID;
          objects.push(obj)
         await this.saveObjects(objects)
         return nuevoID
          // console.log("ESTO ES EL CONTENT:", content);
          // const items = await fs.promises.writeFile(this.path, content);
          // return items;
        } catch (error) {
          console.log("No se pudo cargar el prod", error);
        }
      }
     async getById(id){
        const objects= await this.getObjects()
        const objectFinded= objects.find((obj)=>obj.id == id)
        console.log(`EL OBJ ENCONTRADO CON EL ID ${id} ES`, objectFinded);
        return objectFinded || null
     }
     async getAll(){
         try {

                const objects= await this.getObjects()
                // const readedProduct= await fs.promises.readFile(`${this.path}`, "utf-8")
                // const parsed= JSON.parse(readedProduct)

                // console.log("ESTA ES LA LISTA DE OBJETOS:",parsed);
                 //return parsed
                 console.log(objects);
                return objects
               
         } catch (error) {
             console.log("Error al obtener objetos");
         }
        
     }
     async deleteById(id){
        
        const objects= await this.getObjects()
        const objectDeleted= objects.filter((obj)=>obj.id !== id)
        console.log(`SE HA BORRADO EL OBJ CON EL ID ${id}, NUEVA LISTA DE OBJ: `, objectDeleted);
        return objectDeleted || null
     }
     async deleteAll(){
      try {
         await this.saveObjects([])
      } catch (error) {
        console.log("error al eliminar objetos", error);
      }
       
     }
     async getObjects(){
      try {
        const data=await fs.promises.readFile(this.path,'utf-8')
        return data ? JSON.parse(data) : undefined
      } catch (error) {
      return undefined
      }
     }

     async saveObjects(obj){
      try {
        await fs.promises.writeFile(this.path, JSON.stringify(obj,null,2))
      } catch (error) {
        console.log("No se puedieron guardar los objs", error);
      }
     }

 }
 async function test() {
  const contenedor1 = new Contenedor("productos.txt");

  const prod1 = {
    title: "Manzana",
    price: 250,
    thumbnail: "ruta1"
  };
  const prod2 = {
    title: "Sandia",
    price: 2506,
    thumbnail: "ruta2"
  };
  const prod3 = {
    title: "Pera",
    price: 2506,
    thumbnail: "ruta2"
  };
  const prod4 = {
    title: "Frutilla",
    price: 2506,
    thumbnail: "ruta2"
  };
  const prod5 = {
    title: "Melon",
    price: 2506,
    thumbnail: "ruta2"
  };
  const prod6 = {
    title: "Uva",
    price: 2506,
    thumbnail: "ruta2"
  };

  const obj1 = await contenedor1.save(prod1);
  console.log("Se cargó el objeto", obj1);

  const obj2 = await contenedor1.save(prod2);
  console.log("Se cargó el objeto", obj2);

  const obj3 = await contenedor1.save(prod3);
  console.log("Se cargó el objeto", obj3);
  const obj4 = await contenedor1.save(prod4);
  console.log("Se cargó el objeto", obj4);
  const obj5 = await contenedor1.save(prod5);
  console.log("Se cargó el objeto", obj5);
  const obj6 = await contenedor1.save(prod6);
  console.log("Se cargó el objeto", obj6);


  const allObjects = await contenedor1.getAll();
  console.log("All objects:", allObjects);
  const getElement= await contenedor1.getById(2)

}

test();