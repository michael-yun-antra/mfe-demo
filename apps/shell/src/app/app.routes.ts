// import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { ReactWrapperComponent } from './components/react-wrapper/react-wrapper.component';

export const appRoutes: Route[] = [
  {
    path: 'quiz',
    loadChildren: () =>
      loadRemote<typeof import('quiz/Routes')>('quiz/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'home',
    component: ReactWrapperComponent,
    data: {
      elementName: 'home-react',
      loadChildren: () => import('home/Module'),
    },
  },
];
