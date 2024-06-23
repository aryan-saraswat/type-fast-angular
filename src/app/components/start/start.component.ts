import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TimekeeperService } from '../../services/timekeeper.service';
import { WordsService } from '../../services/words-service';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
})
export class StartComponent {
  displayedWords: number = 5;
  selectedTime = 60;
  formGroup: FormGroup;
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

  constructor(
    private router: Router,
    private wordsService: WordsService,
    private formBuilder: FormBuilder,
    private timekeeper: TimekeeperService
  ) {
    this.formGroup = this.formBuilder.group({
      numberOfWords: [
        5,
        [Validators.min(5), Validators.max(15), Validators.required],
      ],
      time: [
        60,
        [Validators.min(30), Validators.max(120), Validators.required],
      ],
    });
  }

  onSubmitClick() {
    if (this.formGroup.valid) {
      this.wordsService.numberOfWords =
        this.formGroup.controls['numberOfWords'].value;
      this.timekeeper.gameDuration = this.formGroup.controls['time'].value;
      this.router.navigate(['game']);
    }
  }

  onSelectTime() {
    console.log('selected time: ', this.selectedTime);
  }
}
