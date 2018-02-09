import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

const route = [{
    path: '',
    component: ContactComponent
}];

export default RouterModule.forChild(route);
