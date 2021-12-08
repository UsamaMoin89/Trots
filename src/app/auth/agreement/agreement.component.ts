import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { ToastService } from '../../services/toast.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {

  isLoading = false;
  acceptTerms = false;
  useESig = false;

  eSig: string;

  constructor(
    private router: Router, private toastService: ToastService,
    private utilsService: UtilsService, private apiService: ApiServiceService
  ) {
  }

  ngOnInit(): void {
    //
  }

  navigateToUrl(userLoc: string): void {
    this.toastService.success(`navigate to ${userLoc}`);
    this.router.navigateByUrl(`auth/${userLoc}`);
  }
}
