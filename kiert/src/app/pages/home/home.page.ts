import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonButton,
  ],
})
export class HomePage {
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
}