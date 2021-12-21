import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects-for-quiz',
  templateUrl: './subjects-for-quiz.component.html',
  styleUrls: ['./subjects-for-quiz.component.scss']
})
export class SubjectsForQuizComponent {

  constructor(private router: Router) { }

  onBackClick(): void {
    this.router.navigateByUrl('auth/selected-subjects').then();
  }

  onNextClick(): void {
    this.router.navigateByUrl('auth/attempt-test').then();
  }

}
