import { Component, ContentChild, Inject, Input, LOCALE_ID, NgZone } from '@angular/core';
import { AbstractControl, FormControlName } from '@angular/forms';
import { ToastService } from '../../../services/toast.service';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html'
})
export class FormControlComponent {

  @Input() errorMap;
  @Input() class = '';
  @ContentChild(FormControlName, {static: false}) fcn: FormControlName;

  getError(): string {
    return UtilsService.getErrorMsg(this.control, this.errorMap);
  }

  get control(): AbstractControl {
    return this.fcn.control;
  }

  get isHighlighted(): boolean {
    return this.control.invalid && (this.control.dirty || this.control.touched);
  }

  // constructor(private utilsService: UtilsService) {}

}
