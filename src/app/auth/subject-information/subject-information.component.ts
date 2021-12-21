import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-subject-information',
  templateUrl: './subject-information.component.html',
  styleUrls: ['./subject-information.component.scss']
})
export class SubjectInformationComponent implements OnInit {

  selectedGeneralCategory;
  selectedSubCategory;
  isLoading = false;
  generalCategory = [];
  subCategory = [];
  selectedSubjects = [];

  constructor(
    private router: Router,
    private toastService: ToastService,
    private apiService: ApiServiceService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.isLoading = true;

    await this.getAllClasses();

    await this.getAllSubjects();

    this.isAlreadySubjectsSelected();

    this.isLoading = false;
  }

  getAllClasses(): Promise<any> {
    return new Promise(resolve => {
      this.apiService.getAllClasses().subscribe(res => {
        this.subCategory = res.result;
        resolve(true);
      }, error => {
        this.toastService.error(error.reason);
        resolve(true);
      });
    });
  }

  getAllSubjects(): Promise<any> {
    return new Promise(resolve => {
      this.apiService.getAllSubjects().subscribe(res => {
        this.generalCategory = res.result;
        resolve(true);
      }, error => {
        this.toastService.error(error.reason);
        resolve(true);
      });
    });
  }

  isAlreadySubjectsSelected(): void {
    if (localStorage.getItem('SELECTED_SUBJECTS')) {
      this.selectedSubjects = JSON.parse(localStorage.getItem('SELECTED_SUBJECTS'));
    }
  }

  addSubject(): void {
    if (this.selectedGeneralCategory && this.selectedSubCategory) {
      this.selectedSubjects.push({
        classInfo: this.selectedSubCategory,
        subjectInfo: this.selectedGeneralCategory,
        experience: null,
        subjectfee: null,
        document: null,
        documentpath: null,
        timefrom: '',
        timeto: ''
      });
    }

    this.selectedGeneralCategory = null;
    this.selectedSubCategory = null;
  }

  onBackClick(): void {
    this.router.navigateByUrl('auth/institute').then();
  }

  onNextClick(): void {
    localStorage.setItem('SELECTED_SUBJECTS', JSON.stringify(this.selectedSubjects));
    this.router.navigateByUrl('auth/selected-subjects');
  }
}
