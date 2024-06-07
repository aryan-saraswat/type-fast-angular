import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordsHolderComponent } from './components/words-holder/words-holder.component';
import { WordsService } from './services/words-service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, WordsHolderComponent],
})
export class AppComponent {
  title = 'type-fast-angular';

  constructor(private wordsService: WordsService) {}

  onClick() {}
}
