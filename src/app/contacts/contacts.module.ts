import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import contactsRoute from './contacts.route';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [CommonModule, contactsRoute],
    declarations: [ContactsComponent, ContactComponent]
})

export class ContactsModule { }

