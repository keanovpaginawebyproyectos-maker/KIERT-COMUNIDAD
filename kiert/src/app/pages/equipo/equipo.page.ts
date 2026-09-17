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
} from '@ionic/angular';

@Component({
  selector: 'app-equipo',
  templateUrl: 'equipo.page.html',
  styleUrls: ['equipo.page.scss'],
  imports: [
    NgFor,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
  ],
})
export class EquipoPage {
  logo = {
    imagen: 'assets/images/logo/logo.png',
    alt: 'Logo KIERT',
  };

  comunidad = {
    titulo: 'Somos una comunidad startup',
    descripcion:
      'En KIERT trabajamos como un equipo unido. Cada proyecto lo construimos en grupo, combinando talento, experiencia y pasión por la tecnología para entregar resultados de la mejor calidad.',
    valores: [
      {
        titulo: 'Trabajo en equipo',
        texto:
          'Desarrollamos cada proyecto de forma colaborativa, sumando ideas y experiencia.',
      },
      {
        titulo: 'Calidad garantizada',
        texto:
          'Cada entrega pasa por revisión técnica y mejora continua antes de llegar a ti.',
      },
      {
        titulo: 'Crecimiento conjunto',
        texto:
          'Aprendemos y evolucionamos con cada proyecto, junto a nuestros clientes.',
      },
    ],
  };

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