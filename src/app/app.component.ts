import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { WordsHolderComponent } from './components/words-holder/words-holder.component';
import { WordsService } from './services/words-service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, WordsHolderComponent, RouterLink],
})
export class AppComponent {
  title = 'type-fast-angular';

  constructor(private wordsService: WordsService, private router: Router) {}

  onButtonClick() {
    console.log('button clicked');
    this.router.navigate(['game']);
  }
}
