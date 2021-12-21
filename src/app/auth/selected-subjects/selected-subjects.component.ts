import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-selected-subjects',
  templateUrl: './selected-subjects.component.html',
  styleUrls: ['./selected-subjects.component.scss']
})
export class SelectedSubjectsComponent implements OnInit {

  selectedSubjects = [];
  isLoading = false;

  constructor(
    private apiService: ApiServiceService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('SELECTED_SUBJECTS')) {
      this.selectedSubjects = JSON.parse(localStorage.getItem('SELECTED_SUBJECTS'));
    }
  }

  uploadSubjectCertificate(event: any, subject): void {
    const file = event.target.files[0];
    this.isLoading = true;

    subject.document = file;
    this.apiService.postCertificate(subject).subscribe(res => {
      this.isLoading = false;
      subject.documentPath = res.documentPath;
    }, error => {
      this.isLoading = false;
      this.toastService.error(error.reason);
    });
  }

  onBackClick(): void {
    localStorage.setItem('SELECTED_SUBJECTS', JSON.stringify(this.selectedSubjects));
    this.router.navigateByUrl('auth/subjects').then();
  }

  onNextClick(): void {
    this.isLoading = true;

    this.apiService.fnAddSubjectInfo(this.selectedSubjects).subscribe(() => {
      this.isLoading = false;
      this.router.navigateByUrl('auth/selected-subjects').then();
    }, error => {
      this.isLoading = false;
      this.toastService.error(error.message);
    });

  }
}
