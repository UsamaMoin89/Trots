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

  signature;
  acceptTermsAndCondition = false;
  useSignature = false;

  constructor(
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    //
  }

  onBackClick(): void {
    this.router.navigateByUrl('auth/selected-subjects').then();
  }

  onNextClick(): void {
    this.router.navigateByUrl('auth/compliance').then();
  }
}
