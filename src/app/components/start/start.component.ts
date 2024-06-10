import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { WordsService } from '../../services/words-service';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputNumberModule,
    CardModule,
    ButtonModule,
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent {
  value4: number = 5;

  constructor(private router: Router, private wordsService: WordsService) {}

  onSubmitClick() {
    this.wordsService.numberOfWords = this.value4;
    this.router.navigate(['game']);
  }
}
