import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GameAreaComponent } from './components/game-area/game-area.component';
import { StartComponent } from './components/start/start.component';

export const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },
  { path: 'game', component: GameAreaComponent },
  { path: 'start', component: StartComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
];
