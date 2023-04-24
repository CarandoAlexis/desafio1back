class ProductManager {
    constructor(products = []) {
      this.products = products;
      this.currentId = 0;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        throw new Error("Todos los campos son obligatorios");
      }
  
      if (this.products.some((product) => product.code === code)) {
        throw new Error("El código del producto ya existe");
      }
  
    const product = {
        id: ++this.currentId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        };
        this.products.push(product);
    }
    
    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
          console.error("Not Found");
        }
        return product;
    }

    getProducts() {
      return this.products;
    }
  }

const productManager = new ProductManager();

productManager.addProduct(
    "Producto prueba 1",
    "Descripción del producto prueba 1",
    200,
    "Sin Imagen",
    "P1",
    200
);
  
productManager.addProduct(
    "Producto 2",
    "Descripción del producto 2",
    25.75,
    "Sin Imagen",
    "P2",
    90
);
  
const product1 = productManager.getProductById(1);
console.log(product1);

//para probar si funciona el error por no encontrar producto por id, cambir id a 2 para que arroje ambos productos

const product3 = productManager.getProductById(3);
console.log(product3);
  
/*Ejemplo para probar error de codigo ya existente
const productManager = new ProductManager();

productManager.addProduct(
    "Producto prueba 1",
    "Descripción del producto prueba 1",
    200,
    "Sin Imagen",
    "P1",
    200
);

productManager.addProduct(
    "Producto 2",
    "Descripción del producto 2",
    25.75,
    "Sin Imagen",
    "P1",
    90
);

console.log(productManager.getProducts());
*/


