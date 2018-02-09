import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import homeRoutes from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [CommonModule, homeRoutes],
    declarations: [HomeComponent]
})

export class HomeModule { }
