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
          obj.id = ++this.id;
          this.contenido.push(obj);
          const content = JSON.stringify(this.contenido);
          console.log("ESTO ES EL CONTENT:", content);
          const items = await fs.promises.writeFile(this.path, content);
          return items;
        } catch (error) {
          console.log("No se pudo cargar el prod", error);
        }
      }
     async getById(id){
        const objects= await this.getAll()
        const objectFinded= objects.find((obj)=>obj.id == id)
        console.log(`EL OBJ ENCONTRADO CON EL ID ${id} ES`, objectFinded);
        return objectFinded || null
     }
     async getAll(){
         try {
             
                const readedProduct= await fs.promises.readFile(`${this.path}`, "utf-8")
                const parsed= JSON.parse(readedProduct)

                console.log("ESTA ES LA LISTA DE OBJETOS:",parsed);
                 return parsed
         
               
         } catch (error) {
             console.log("Lista vacía");
         }
        
     }
     async deleteById(id){
        await this.getAll()
        const objects= this.contenido
        const objectDeleted= objects.filter((obj)=>obj.id !== id)
        console.log(`SE HA BORRADO EL OBJ CON EL ID ${id}, NUEVA LISTA DE OBJ: `, objectDeleted);
        return objectDeleted || null
     }
     async deleteAll(){
        await this.getAll()
       await fs.promises.writeFile(this.path,[])
       this.getAll()
     }

 }
 const contenedor1 = new Contenedor("productos.txt")

 const prod1= {
     title: "Manzana",
     price: 250,
     thumbnail: "ruta1"
 }
 const prod2= {
     title: "Manzanas",
     price: 2502,
     thumbnail: "ruta2"
 }

contenedor1.save(prod1)
contenedor1.save(prod2)

 contenedor1.getAll()
contenedor1.getById(1)
contenedor1.deleteById(2)
contenedor1.deleteAll()