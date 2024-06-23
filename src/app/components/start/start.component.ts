import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { ListboxModule } from 'primeng/listbox';
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
    ListboxModule,
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent {
  displayedWords: number = 5;
  selectedTime = 60;
  times = [
    {
      label: '60 seconds',
      value: 60,
    },
    {
      label: '90 seconds',
      value: 90,
    },
    {
      label: '120 seconds',
      value: 120,
    },
  ];

  constructor(private router: Router, private wordsService: WordsService) {}

  onSubmitClick() {
    this.wordsService.numberOfWords = this.displayedWords;
    this.router.navigate(['game']);
  }

  onSelectTime() {
    console.log('selected time: ', this.selectedTime);
  }
}
