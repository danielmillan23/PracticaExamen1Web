import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacionComponent } from './aplicacion/aplicacion.component';

const routes: Routes = [

  { path: 'form', component: AplicacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
