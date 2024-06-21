import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { ResultsComponent } from './components/results/results.component';
import { StartComponent } from './components/start/start.component';

export const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },
  { path: 'start', component: StartComponent },
  { path: 'game', component: GamePageComponent },
  { path: 'results', component: ResultsComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
];
