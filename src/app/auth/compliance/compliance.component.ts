import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.scss']
})
export class ComplianceComponent {

  constructor(private  router: Router) { }

  onNextClick(): void {
    this.router.navigateByUrl('auth/subjects-for-quiz').then();
  }

}
