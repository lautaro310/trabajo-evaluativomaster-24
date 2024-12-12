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
  selector: 'app-zapatillas',           // Selector utilizado en el HTML para este componente
  templateUrl: './zapatillas.component.html', // Archivo HTML asociado al componente
  styleUrls: ['./zapatillas.component.css']   // Archivo de estilos CSS asociado al componente
})
export class ZapatillasComponent {
  // Array que contiene todos los productos disponibles en la tienda (ahora zapatillas)
  productos: Producto[] = [
    { id: 1, nombre: 'PUMAS SUEDE XL', precio: 85000, imagenUrl: 'https://dcdn.mitiendanube.com/stores/004/648/247/products/suede-xl-sneakers-unisex-black-puma-3998c7ec6016afab8a17255226865418-640-0.png', liked: false },
    { id: 2, nombre: 'VANS KNU', precio: 80000, imagenUrl: 'https://acdn.mitiendanube.com/stores/002/446/592/products/whatsapp-image-2024-05-02-at-18-54-26-1-c335d65401e8bab12117147436015972-1024-1024.jpeg', liked: false },
    { id: 3, nombre: 'CAMPUS', precio: 90500, imagenUrl: 'https://i.pinimg.com/originals/49/25/97/4925974ab01011c92ab584b2226b8627.png', liked: false },
    { id: 4, nombre: 'NIKE AIR FORCE 1', precio: 87000, imagenUrl: 'https://cop-room.com/cdn/shop/files/nike-air-force-1-canvas-grey-2003-645096.png?v=1713878972', liked: false },
  ];

  // Array que representa los productos añadidos al carrito de compras
  carrito: CarritoItem[] = [];

  // Propiedad para almacenar la URL de la imagen cuando se muestra en tamaño grande (modal)
  imagenGrandeUrl: string | null = null;

  // Función para marcar/desmarcar "me gusta"
  toggleLike(producto: Producto): void {
    producto.liked = !producto.liked;
  }

  // Función para agregar productos al carrito
  agregarAlCarrito(producto: Producto): void {
    const itemEnCarrito = this.carrito.find(item => item.producto.id === producto.id);
    if (itemEnCarrito) {
      itemEnCarrito.cantidad += 1;
    } else {
      this.carrito.push({ producto, cantidad: 1 });
    }
  }

  // Función para eliminar productos del carrito
  eliminarDelCarrito(producto: Producto): void {
    this.carrito = this.carrito.filter(item => item.producto.id !== producto.id);
  }

  // Función para calcular el total del carrito
  calcularTotal(): number {
    return this.carrito.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
  }

  // Función para ver la imagen en grande
  verImagenGrande(imagenUrl: string): void {
    this.imagenGrandeUrl = imagenUrl;
  }

  // Función para cerrar el modal de imagen
  cerrarModal(): void {
    this.imagenGrandeUrl = null;
  }
}
