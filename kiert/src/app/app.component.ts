import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
  IonHeader,
  IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  cubeOutline,
  peopleOutline,
  folderOutline,
  mailOutline,
  sunnyOutline,
  moonOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    NgFor,
    RouterLink,
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonMenuToggle,
    IonHeader,
    IonToolbar,
  ],
})
export class AppComponent implements OnInit {
  menuItems = [
    { title: 'Inicio', url: '/home', icon: 'home-outline' },
    { title: 'Productos', url: '/productos', icon: 'cube-outline' },
    { title: 'Equipo', url: '/equipo', icon: 'people-outline' },
    { title: 'Contacto', url: '/contacto', icon: 'mail-outline' },
  ];

  isDark = false;

  constructor() {
    addIcons({
      homeOutline,
      cubeOutline,
      peopleOutline,
      folderOutline,
      mailOutline,
      sunnyOutline,
      moonOutline,
    });
  }

  ngOnInit(): void {
    const saved = localStorage.getItem('kiert-theme');
    if (saved === 'dark') {
      this.isDark = true;
    } else if (saved === 'light') {
      this.isDark = false;
    } else {
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.applyTheme();
    localStorage.setItem('kiert-theme', this.isDark ? 'dark' : 'light');
  }

  /**
   * Si el logo no carga, oculta la imagen y muestra el fallback SVG.
   */
  onLogoError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';

    const fallback = img.nextElementSibling as HTMLElement | null;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  }

  private applyTheme(): void {
    const body = document.body;
    if (this.isDark) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}