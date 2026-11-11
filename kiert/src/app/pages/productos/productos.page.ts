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
      nombre: 'Plataforma de Comunidad',
      descripcion:
        'Sistema web para gestión de comunidades con perfiles, publicaciones y moderación.',
      categoria: 'Web',
      imagen: 'assets/images/productos/sistema-de-comunidad.jpg',
      caracteristicas: [
        'Diseño responsive',
        'Optimización SEO',
        'Carga ultrarrápida',
      ],
    },
    {
      nombre: 'E-commerce Textil',
      descripcion:
        'Tienda online con catálogo, carrito de compras y solicitud de cotizaciones.',
      categoria: 'Web',
      imagen: 'assets/images/productos/sistema-karnil.jpg',
      caracteristicas: [
        'Catálogo de productos',
        'Solicitud de cotización',
        'Integración con WhatsApp',
      ],
    },
    {
      nombre: 'Sistema de Pedidos',
      descripcion:
        'Plataforma para gestión de pedidos en cafeterías, con seguimiento en tiempo real.',
      categoria: 'Web',
      imagen: 'assets/images/productos/yrelis.jpg',
      caracteristicas: [
        'Interfaz adaptable',
        'Registro de pedidos',
        'Seguimiento de estado',
      ],
    },
    {
      nombre: 'Landing Page Corporativa',
      descripcion:
        'Página de aterrizaje para empresa textil, enfocada en conversión y presentación de marca.',
      categoria: 'Empresarial',
      imagen: 'assets/images/productos/herliz.jpg',
      caracteristicas: [
        'Diseño atractivo',
        'Formulario de contacto',
        'Galería de productos',
      ],
    },
  ];
}