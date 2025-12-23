import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Entete } from './entete/entete';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Entete],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'cv_bootstrap';
}