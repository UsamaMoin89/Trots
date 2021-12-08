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

  isLoading = false;
  selectSubject = true;
  addCertificates = false;

  generalCategory = [];
  subCategory = [];

  selGenCategory;
  selSubCategory;

  selectedSubjects = [];

  constructor(
    private router: Router, private toastService: ToastService, private apiService: ApiServiceService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    this.selectSubject = true;

    await this.apiService.getAllClasses().subscribe(res => {
      if (res.statuscode === 200) {
        this.subCategory = res.result;
      }
    });

    await this.apiService.getAllSubjects().subscribe(res => {
      if (res.statuscode === 200) {
        this.generalCategory = res.result;
      }

      this.selGenCategory = null;
      this.selSubCategory = null;

      this.isLoading = false;
    });
  }

  navigateToUrl(userLoc: string, action): void {
    if (this.selectSubject) {
      if (action === 'back') {
        this.router.navigateByUrl(`auth/${userLoc}`);
      } else {
        this.selectSubject = !this.selectSubject;
        this.addCertificates = !this.addCertificates;
      }
    } else if (this.addCertificates) {
      if (action === 'back') {
        this.selectSubject = !this.selectSubject;
        this.addCertificates = !this.addCertificates;
      } else {
        console.log('Save subject information');
        this.isLoading = true;

        this.apiService.fnAddSubjectInfo(this.selectedSubjects).subscribe(rtnData => {
          this.isLoading = false;

          if (rtnData.statuscode === 200) {
            this.toastService.success(rtnData.message);
            this.router.navigateByUrl(`auth/${userLoc}`);
          } else {
            this.toastService.error(rtnData.message);
          }
        });
      }
    }
  }

  addSubject(): void {
    if (this.selGenCategory && this.selSubCategory) {
      this.selectedSubjects.push({
        classInfo: this.selSubCategory,
        subjectInfo: this.selGenCategory,
        experience: null,
        subjectfee: null,
        document: null,
        documentpath: null,
        timefrom: '',
        timeto: ''
      });
    }

    this.selGenCategory = null;
    this.selSubCategory = null;
  }

  uploadSubjectCertificate(event: any, selSub): void {
    const file = event.target.files[0];
    this.isLoading = true;

    selSub.document = file;
    this.apiService.postCertificate(selSub).subscribe(res => {
      this.isLoading = false;

      if (res.statuscode === 200) {
        selSub.documentPath = res.documentPath;
      } else {
        this.toastService.error(res.message);
      }
    });
  }
}
