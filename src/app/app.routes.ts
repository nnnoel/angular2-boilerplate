import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './common/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'example1',
    redirectTo: ''
  },
  {
    path: 'example2',
    redirectTo: ''
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
