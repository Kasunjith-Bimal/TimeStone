import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VechicalComponent } from './vechical.component';


const routes: Routes = [
  {
    path: '', component: VechicalComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VechicalRoutingModule { }
