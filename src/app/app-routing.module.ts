import { ListCarComponent } from './shared/list-car/list-car.component';
import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'veiculos',
    loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
