import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: 'productos.page.html',
  styleUrls: ['productos.page.scss'],
  imports: [
    NgFor,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonButton,
  ],
})
export class ProductosPage {
  productos = [
    {
      nombre: 'proyecto grande',
      descripcion:
        'Página web de una comunidad',
      categoria: 'Web',
      imagen: 'assets/images/productos/sistema-de-comunidad.jpg',
      caracteristicas: [
        'Diseño responsive',
        'Optimización SEO',
        'Carga ultrarrápida',
      ],
    },
    {
      nombre: 'E-commerce',
      descripcion:
        'Tienda online de una empresa textil',
      categoria: 'Web',
      imagen: 'assets/images/productos/sistema-karnil.jpg',
      caracteristicas: [
        'Solicitud de cotizacion',
        'wsp',
        'Gestión de productos',
      ],
    },
    {
      nombre: 'pagina web',
      descripcion:
        'sistema de gestion de pedidos para una cafeteria',
      categoria: 'web',
      imagen: 'assets/images/productos/yrelis.jpg',
      caracteristicas: [
        'adptable',
        'hacer pedidos',
        'solicitud de pedidos',
      ],
    },
    {
      nombre: 'lading',
      descripcion:
        'sistema ladingpára una empresa textil',
      categoria: 'Empresarial',
      imagen: 'assets/images/productos/herliz.jpg',
      caracteristicas: [
        'Awsp',
        'Dproductos',
        'fotos',
      ],
    },
  ];
}