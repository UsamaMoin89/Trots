import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// tslint:disable-next-line:ban-ts-ignore
// @ts-ignore
import * as countryList from '../../../assets/country-codes.json';
import { ApiServiceService } from '../../services/api-service.service';
import { ToastService } from '../../services/toast.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  profileForm: FormGroup;

  isLoading = false;
  showPassword = false;
  shoeConfirmPass = false;
  countries = [];

  selCountry;

  constructor(
    private formBuilder: FormBuilder, private router: Router, private toastService: ToastService,
    private utilsService: UtilsService, private apiService: ApiServiceService
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.createProfileForm();
    const countryData = await this.apiService.getCountriesList().toPromise();

    this.countries = countryData.result;
    this.countries.forEach(item => {
      const countryIdx = (countryList.default).findIndex(currItem => currItem.name === item.name);

      if (countryIdx > -1) {
        item.dial_code = (countryList.default)[countryIdx].dial_code;
        item.flagSrc = `https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${(countryList.default)[countryIdx].code}.svg`;
      }
    });

    this.selCountry =  this.countries[1];
    this.profileForm.controls.countryCode.setValue(this.selCountry.dial_code);
    localStorage.setItem('regUserCountry', this.selCountry.name);
  }

  signUp(): void {
    this.isLoading = true;
    if (this.profileForm.invalid) {
      return this.utilsService.validateAllFormFields(this.profileForm);
    }

    // this.toastService.success('Info Saved');
    this.apiService.fnRegisterUser(this.profileForm.value, true).subscribe(rtnData => {
      this.isLoading = false;

      if (rtnData.statuscode === 200) {
        console.log('navigate to respective location');
        localStorage.setItem('regUserGuid', rtnData.userguid);

        this.router.navigateByUrl('auth/user-loc');
      } else {
        this.toastService.error(rtnData.message);
      }
    });
  }

  gotoLogin(): void {
    this.router.navigateByUrl('auth/login');
  }

  setCountryDialCode(selCountry): void {
    this.selCountry = selCountry.value;
    this.profileForm.get('countryCode').setValue(this.selCountry.dial_code);
    localStorage.setItem('regUserCountry', this.selCountry.label);
  }

  private createProfileForm(): void {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      countryCode: [''],
      phoneNumber: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
}
