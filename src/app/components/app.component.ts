import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home.component';

@Component({
  selector: 'MainRoot',
  standalone: true,
  imports: [RouterOutlet,HomeComponent],
  templateUrl: '../page/app.component.html',
  styleUrl: '../scss/app.component.scss'
})
export class AppComponent {
  title = 'Central Exchange';
}
