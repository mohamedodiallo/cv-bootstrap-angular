import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Entete } from './entete/entete';
import { Contact } from './contact/contact';
import { Competences } from './competences/competences';
import { Langues } from './langues/langues';
import { Experiences } from './experiences/experiences';
import { Formations } from './formations/formations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Entete, Contact, Competences, Langues, Experiences, Formations],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'cv_bootstrap';
}