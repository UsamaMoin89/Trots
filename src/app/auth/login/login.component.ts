import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import { ToastService } from '../../services/toast.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  isTeacher = true;
  isLoading = false;
  isCaptchaSuccess = false;

  siteKey = 'AIzaSyDwaCSdaDLWeGbO6qaSdNKjgQvZPpHI3-I';

  constructor(
    private formBuilder: FormBuilder, private router: Router, private toastService: ToastService,
    private utilsService: UtilsService, private apiService: ApiServiceService) {
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  signIn(): void {
    if (this.loginForm.invalid) {
      return this.utilsService.validateAllFormFields(this.loginForm);
    }

    // if (!this.isCaptchaSuccess) {
    //   return this.toastService.error('Captcha Not Checked');
    // }

    const formValue = this.loginForm.value;
    this.isLoading = true;

    this.apiService.fnLoginUser(formValue, false, this.isTeacher).subscribe(rtnData => {
      console.log('rtnData', rtnData);
      this.isLoading = false;

      if (rtnData.statuscode === 200) {
        console.log('navigate to respective dashboard');
        this.toastService.success('Login successful');
      } else {
        this.toastService.error(rtnData.message);
      }
    });
  }

  onTabSelection($event: any): void {
    this.isTeacher = $event.index === 0;
  }

  handleCaptchaExpire(): void {
    //
  }

  handleCaptchaSuccess(event): void {
    if (event) {
      this.isCaptchaSuccess = true;
    }
  }

  loginWithGoogle(): void {
    console.log('trigger google login');
  }

  loginWithFacebook(): void {
    console.log('trigger facebook login');
  }

  gotoRegistration(): void {
    this.router.navigateByUrl('auth/register');
  }

  private createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      loginEmail: ['', Validators.required],
      loginPassword: ['', Validators.required],
      recaptcha: [''],
      rememberMe: [false]
    });
  }
}
