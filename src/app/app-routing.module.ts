import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegComponent } from './reg/reg.component';

//const routes: Routes = [];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Reg',
    pathMatch: 'full'
  },
  {
    path: 'Reg',
    component: RegComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
