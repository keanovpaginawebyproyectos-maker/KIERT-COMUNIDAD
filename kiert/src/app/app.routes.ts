import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./pages/productos/productos.page').then((m) => m.ProductosPage),
  },
  {
    path: 'equipo',
    loadComponent: () =>
      import('./pages/equipo/equipo.page').then((m) => m.EquipoPage),
  },
 
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contacto/contacto.page').then((m) => m.ContactoPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];