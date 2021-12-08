import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiServiceService } from '../../services/api-service.service';
import { ToastService } from '../../services/toast.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  showPassword = false;

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, private router: Router, private toastService: ToastService,
    private utilsService: UtilsService, private apiService: ApiServiceService
  ) {
    console.log();
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  signIn(): void {
    if (this.loginForm.invalid) {
      return this.utilsService.validateAllFormFields(this.loginForm);
    }

    const formValue = this.loginForm.value;
    this.isLoading = true;

    this.apiService.fnLoginUser(formValue, true, false).subscribe(rtnData => {
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

  private createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
