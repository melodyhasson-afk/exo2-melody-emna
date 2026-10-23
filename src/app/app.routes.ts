import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ListeComponent } from './pages/liste/liste';
import { ContactComponent } from './pages/contact/contact';
import { GestionComponent } from './pages/gestion/gestion';

export const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gestion', component: GestionComponent },

  // 1. URL vide ("") -> Redirige vers la page d'accueil
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },

  // 2. N'importe quelle URL inconnue ("**") -> Redirige vers la page d'accueil
  { path: '**', redirectTo: 'accueil' }
];