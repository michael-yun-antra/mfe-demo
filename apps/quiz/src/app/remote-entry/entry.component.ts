import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NxWelcomeComponent } from './nx-welcome.component';
import { QuizComponent } from './components/quiz.component';
@Component({
  imports: [CommonModule, QuizComponent],
  selector: 'app-quiz-entry',
  // template: `<app-nx-welcome></app-nx-welcome>`,
  template: `<app-quiz></app-quiz>`,
})
export class RemoteEntryComponent {}
