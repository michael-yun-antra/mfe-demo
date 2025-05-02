import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizComponent {
  questions = [
    {
      id: 1,
      text: 'What is the primary way Angular handles data binding?',
      options: ['Two-way binding', 'One-way binding', 'No binding', 'Event binding'],
      correctAnswer: 'Two-way binding'
    },
    {
      id: 2,
      text: 'Which directive is used to repeat elements in Angular?',
      options: ['*ngIf', '*ngFor', 'ngModel', 'ngClass'],
      correctAnswer: '*ngFor'
    }
  ];

  answers: { [key: number]: string } = {};
  score = 0;
  showResults = false;

  constructor(private cdr: ChangeDetectorRef) {}

  submitQuiz() {
    this.score = this.questions.reduce((score, question) => {
      return score + (this.answers[question.id] === question.correctAnswer ? 1 : 0);
    }, 0);
    this.showResults = true;
    this.cdr.markForCheck();
  }

  resetQuiz() {
    this.answers = {};
    this.score = 0;
    this.showResults = false;
    this.cdr.markForCheck();
  }
}