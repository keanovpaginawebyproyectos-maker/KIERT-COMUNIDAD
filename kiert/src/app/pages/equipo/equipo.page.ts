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
    titulo: 'Somos un equipo apasionado por la tecnología',
    descripcion:
      'KIERT nació de la idea de un grupo de amigos apasionados por la tecnología. Juntos combinamos nuestras habilidades para desarrollar software de calidad, crecer como equipo y ayudar a otros negocios a digitalizarse.',
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