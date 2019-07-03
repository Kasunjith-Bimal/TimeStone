import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing';
import { HomeComponent } from './home.component';
import {GalleriaModule} from 'primeng/galleria';



@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        GalleriaModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}