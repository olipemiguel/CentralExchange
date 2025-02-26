import { Component } from '@angular/core';
import { HomeModule } from '../module/home.module';

@Component({
  selector: 'Home',
  standalone: true,
  imports: [
    HomeModule
  ],
  templateUrl: '../page/home.component.html',
  styleUrl: '../scss/home.component.scss'
})
export class HomeComponent {

}
