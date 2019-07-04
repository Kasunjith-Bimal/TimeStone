import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing';
import { HomeComponent } from './home.component';
import {GalleriaModule} from 'primeng/galleria';
import {CardModule} from 'primeng/card';

 


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        GalleriaModule,
        CardModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}