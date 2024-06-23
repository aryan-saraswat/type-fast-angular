import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { WordsHolderComponent } from './components/words-holder/words-holder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, WordsHolderComponent, RouterLink],
})
export class AppComponent {
  title = 'type-fast-angular';

  constructor(private router: Router) {}

  onButtonClick() {
    console.log('button clicked');
    this.router.navigate(['game']);
  }
}
