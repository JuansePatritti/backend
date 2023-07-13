//ENTREGABLE
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

