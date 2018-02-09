import { RouterModule } from '@angular/router';

const routes = [
    { path: '', loadChildren: 'app/home/home.module#HomeModule'},
    { path: 'contact', loadChildren: 'app/contacts/contacts.module#ContactsModule'}
];

export default RouterModule.forRoot(routes);
