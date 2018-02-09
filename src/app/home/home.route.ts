import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const route = [{
    path: '',
    component: HomeComponent
}];

export default RouterModule.forChild(route);
