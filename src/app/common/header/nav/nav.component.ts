import { Component } from '@angular/core';

import { Nav } from '../../../interfaces/nav.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  appRoutes: Nav[] = [
    {
      name: 'Example 1',
      link: '/example1'
    },
    {
      name: 'Example 2',
      link: '/example2'
    },
    {
      name: 'Example 3',
      link: '/example3'
    },
  ];
}
