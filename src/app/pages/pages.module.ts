import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './../shared/shared.module';
import { RoutingModule } from './routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
