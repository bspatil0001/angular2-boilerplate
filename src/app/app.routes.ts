import { RouterModule } from '@angular/router';

const routes = [
    { path: '', loadChildren: 'app/home/home.module'},
    { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule'}
];

export default RouterModule.forRoot(routes);
