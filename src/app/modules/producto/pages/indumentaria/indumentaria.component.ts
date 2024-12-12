import { Component } from '@angular/core';

// Interfaz para representar cada producto en la tienda
interface Producto {
  id: number;              // ID único del producto
  nombre: string;          // Nombre del producto
  precio: number;          // Precio del producto
  imagenUrl: string;       // URL de la imagen del producto
  liked: boolean;          // Indica si el producto ha sido marcado con "me gusta"
}

// Interfaz para representar un elemento en el carrito
interface CarritoItem {
  producto: Producto;      // Producto que está en el carrito
  cantidad: number;        // Cantidad de ese producto en el carrito
}

@Component({
  selector: 'app-indumentaria',           // Selector utilizado en el HTML para este componente
  templateUrl: './indumentaria.component.html', // Archivo HTML asociado al componente
  styleUrls: ['./indumentaria.component.css']   // Archivo de estilos CSS asociado al componente
})
export class IndumentariaComponent {
  // Array que contiene todos los productos disponibles en la tienda
  productos: Producto[] = [
    { id: 1, nombre: 'buzo mostaza', precio: 35000, imagenUrl: 'https://acdn.mitiendanube.com/stores/001/207/856/products/photoroom_20240517_175805-9afc2174bad02d200017159847093765-1024-1024.png', liked: false },
    { id: 2, nombre: 'buzo beige', precio: 35000, imagenUrl: 'https://acdn.mitiendanube.com/stores/004/574/777/products/78-9bfa9ee589d072983317201922869120-1024-1024.png', liked: false },
    { id: 3, nombre: 'buzo gris', precio: 35000, imagenUrl: 'https://dcdn.mitiendanube.com/stores/004/812/916/products/buzo-gris-frente-doberman-8945fa5511b8b7a44817180306705088-1024-1024.jpg', liked: false },
    { id: 4, nombre: 'bermudas', precio: 20000, imagenUrl: 'https://acdn.mitiendanube.com/stores/004/690/284/products/short-21-ab8569e226a028ca7e17156585081558-1024-1024.png', liked: false },
    { id: 5, nombre: 'bermuda de jean', precio: 30000, imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5i_ZIKmydo91uwx57RzArw85DMCyiv4uivg&s', liked: false },
    { id: 6, nombre: 'remera', precio: 18000, imagenUrl: 'https://static.zara.net/assets/public/8886/0c13/02f3495d8d33/ea3d6f7355b1/03992354933-e1/03992354933-e1.jpg?ts=1723533237629&w=563', liked: false },
    { id: 7, nombre: 'remera estampado', precio: 18000, imagenUrl: 'https://irrealwearing.com/wp-content/uploads/2024/01/over-scorpio-b-espalda.png', liked: false },
    { id: 8, nombre: 'remera lisa', precio: 15000, imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4o9LChW_DyMaMjVmaqc3RkU1Qq1dujdzwQ&s', liked: false },
  ];

  // Array que representa los productos añadidos al carrito de compras
  carrito: CarritoItem[] = [];

  // Propiedad para almacenar la URL de la imagen cuando se muestra en tamaño grande (modal)
  imagenGrandeUrl: string | null = null;

  /**
   * Marca o desmarca un producto como "me gusta".
   * @param producto Producto que se va a marcar o desmarcar
   */
  toggleLike(producto: Producto): void {
    producto.liked = !producto.liked; // Cambia el estado de 'liked' de true a false o viceversa
  }

  /**
   * Agrega un producto al carrito de compras. Si el producto ya existe en el carrito, incrementa la cantidad.
   * @param producto Producto que se va a agregar al carrito
   */
  agregarAlCarrito(producto: Producto): void {
    const itemEnCarrito = this.carrito.find(item => item.producto.id === producto.id);
    if (itemEnCarrito) {
      itemEnCarrito.cantidad += 1; // Incrementa la cantidad si ya está en el carrito
    } else {
      this.carrito.push({ producto, cantidad: 1 }); // Agrega el producto al carrito si no estaba antes
    }
  }

  /**
   * Elimina un producto del carrito de compras.
   * @param producto Producto que se va a eliminar del carrito
   */
  eliminarDelCarrito(producto: Producto): void {
    this.carrito = this.carrito.filter(item => item.producto.id !== producto.id);
  }

  /**
   * Calcula el costo total de los productos en el carrito.
   * @returns El total del carrito en número
   */
  calcularTotal(): number {
    return this.carrito.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
  }

  /**
   * Muestra la imagen en grande en un modal.
   * @param imagenUrl URL de la imagen que se va a mostrar en grande
   */
  verImagenGrande(imagenUrl: string): void {
    this.imagenGrandeUrl = imagenUrl; // Almacena la URL de la imagen en grande
  }

  /**
   * Cierra el modal de la imagen grande.
   */
  cerrarModal(): void {
    this.imagenGrandeUrl = null; // Borra la URL para cerrar el modal
  }
}
