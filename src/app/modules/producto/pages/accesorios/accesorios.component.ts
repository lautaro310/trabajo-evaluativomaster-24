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
  selector: 'app-accesorios',           // Selector utilizado en el HTML para este componente
  templateUrl: './accesorios.component.html', // Archivo HTML asociado al componente
  styleUrls: ['./accesorios.component.css']   // Archivo de estilos CSS asociado al componente
})
export class AccesoriosComponent {
  // Array que contiene todos los productos disponibles en la tienda de accesorios
  productos: Producto[] = [
    { id: 1, nombre: 'billetera', precio: 15000, imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_679284-MLA77623322174_072024-O.webp', liked: false },
    { id: 2, nombre: 'COLLAR', precio: 10000, imagenUrl: 'https://acdn.mitiendanube.com/stores/002/113/388/products/j001n00112-e3cfc776d9b157a82c17170929547874-1024-1024-f16a23156c0249a8f217170959754919-1024-1024.png', liked: false },
    { id: 3, nombre: 'PULSERA', precio: 8000, imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_853672-MLA32452509719_102019-O.webp', liked: false },
    { id: 4, nombre: 'LENTES', precio: 20000, imagenUrl: 'https://http2.mlstatic.com/D_NQ_NP_755952-MLA47032098952_082021-O.webp', liked: false },
    { id: 5, nombre: 'AROS', precio: 2500, imagenUrl: 'https://images-eu.ssl-images-amazon.com/images/I/61j5NlRSEVL._AC_UL210_SR210,210_.jpg', liked: false },
    { id: 6, nombre: 'RELOJ', precio: 45000, imagenUrl: 'https://i.pinimg.com/originals/d6/00/71/d60071a68677a9e2f02daec0abf7ecc5.jpg', liked: false },
    //www.chanel.com/images/t_fashionzoom1/f_auto/rectangle-sunglasses-black-acetate-metal-acetate-metal-packshot-default-a71662x09961s2218-9549078102046.jpg', liked: false },
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
