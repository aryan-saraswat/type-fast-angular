import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsHolderComponent } from './words-holder.component';

describe('WordsHolderComponent', () => {
  let component: WordsHolderComponent;
  let fixture: ComponentFixture<WordsHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordsHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
