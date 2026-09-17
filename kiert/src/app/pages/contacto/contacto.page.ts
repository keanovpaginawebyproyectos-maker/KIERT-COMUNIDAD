import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: 'contacto.page.html',
  styleUrls: ['contacto.page.scss'],
  imports: [
    NgFor,
    NgIf,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
  ],
})
export class ContactoPage {
  redes = [
    {
      nombre: 'WhatsApp',
      usuario: '+51 940699545',           // 👈 cambia por tu número real
      url: 'https://wa.me/51940699545',
      color: '#25D366',
    },
    {
      nombre: 'Facebook',
      usuario: 'KIERT',
      url: 'https://www.facebook.com/profile.php?id=61587247660638',
      tipo: 'facebook',
      color: '#1877F2',
    },
    {
      nombre: 'Instagram',
      usuario: '@kiert_2005',
      url: 'https://www.instagram.com/kiert_2005',
      tipo: 'instagram',
      color: '#E4405F',
    },
    {
      nombre: 'TikTok',
      usuario: '@kiert2005',
      url: 'https://www.tiktok.com/@kiert2005',
      tipo: 'tiktok',
      color: '#000000',
    },
    {
      nombre: 'GitHub',
      usuario: 'keanovpaginawebyproyectos-maker',
      url: 'https://github.com/keanovpaginawebyproyectos-maker?tab=repositories',
      tipo: 'github',
      color: '#333333',
    },
    {
      nombre: 'GitHub',
      usuario: 'Ardamins',
      url: 'https://github.com/Ardamins?tab=repositories',
      tipo: 'github',
      color: '#333333',
    },
  ];
}