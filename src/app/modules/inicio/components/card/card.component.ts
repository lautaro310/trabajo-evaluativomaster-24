import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { Productos } from 'src/app/models/tarjetas';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: Productos[];

  constructor() {
    this.info = [
      {
        id: "",
        imagen: "https://acdn.mitiendanube.com/stores/004/690/284/products/jogger-negro-1-ffba21e9825894457e17168337521645-480-0.png",
        nombre: "pantalon largo",
        alt: "Zapatillas",
        liked: false // propiedad para el "me gusta"
      },
      {
        id: "",
        nombre: "pantalon corto",
        imagen: "https://libur.com.co/cdn/shop/files/49_41fff040-d106-46f8-9475-0fa9a1bd0217.png?v=1733338753&width=600",
        alt: "Cartera",
        liked: false
      },
      {
        id: "",
        nombre: "buzo",
        imagen: "https://acdn.mitiendanube.com/stores/001/536/118/products/aldjngk-9834897fd0e9f2329717167467550070-1024-1024.png",
        alt: "Gorra",
        liked: false
      }
    ]
  }

  // Método para manejar el evento Like
  likeProducto(i: any) {
    i.liked = !i.liked; // Cambia el estado del "like"
  }

  // Método para manejar el evento Share
  shareProducto(i: any) {
    console.log('Compartir: ', i.nombre);
    // Aquí puedes agregar lógica para compartir el producto
  }
}
