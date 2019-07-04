import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VechicalRoutingModule } from './vechical-routing.module';
import { VechicalComponent } from './vechical.component';

@NgModule({
  declarations: [VechicalComponent],
  imports: [
    CommonModule,
    VechicalRoutingModule
  ]
})
export class VechicalModule { }
