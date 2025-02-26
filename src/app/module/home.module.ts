import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/plugin/header.component';
import { PartnerComponent } from '../components/plugin/partner.component';
import { HomeContentComponent } from '../components/plugin/home.content.component';
import { HomeCardComponent } from '../components/plugin/home.card.component';



@NgModule({
  declarations: [HeaderComponent,PartnerComponent,HomeContentComponent,HomeCardComponent],
  imports: [
    CommonModule,
  ],
  exports: [HeaderComponent,PartnerComponent,HomeContentComponent,HomeCardComponent]
})
export class HomeModule { }
