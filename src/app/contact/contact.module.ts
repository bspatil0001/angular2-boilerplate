import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import contactRoute from './contact.route';

import { ContactComponent } from './contact.component';

@NgModule({
    imports: [CommonModule, contactRoute],
    declarations: [ContactComponent]
})

export class ContactModule { }

