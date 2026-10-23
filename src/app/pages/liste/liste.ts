import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste.html',
  styleUrl: './liste.scss'
})
export class ListeComponent {
  films = [
    {
      title: 'Interstellar',
      poster: 'interstellar.jpg'
    },
    {
      title: 'Hangover',
      poster: 'hangover.jpg'
    },
    {
      title: 'Shutter Island',
      poster: 'shutterisland.jpg'
    },
    {
      title: 'The Invisible Guest',
      poster: 'theinvisibleguest.jpg'
    },
    {
      title: 'Forgotten',
      poster: 'Forgotten.jpg' 
    }
  ];

  selectedFilm: any = null;

  selectFilm(film: any): void {
    this.selectedFilm = film;
  }
}