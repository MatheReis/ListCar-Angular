//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

//Components
import { ListCarComponent } from './list-car/list-car.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    ListCarComponent
  ],
  exports: [
    ListCarComponent,
    Ng2SearchPipeModule,
    FormsModule,
    MatIconModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule,
 ]
})
export class SharedModule { }
