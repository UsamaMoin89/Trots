import { Injectable } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

const ICONS = [
  {src: '/assets/svgs/lock.svg', name: 'lock'},
  {src: '/assets/svgs/mail.svg', name: 'mail'},
  {src: '/assets/svgs/user.svg', name: 'user'},
  {src: '/assets/svgs/eye.svg', name: 'eye'},
  {src: '/assets/svgs/app-logo.svg', name: 'app-logo'},
  {src: '/assets/svgs/page-logo.svg', name: 'page-logo'},
  {src: '/assets/svgs/google.svg', name: 'google'},
  {src: '/assets/svgs/facebook.svg', name: 'facebook'},
  {src: '/assets/svgs/phone.svg', name: 'phone'},
  {src: '/assets/svgs/organization.svg', name: 'organization'},
  {src: '/assets/svgs/calendar.svg', name: 'calendar'},
  {src: '/assets/svgs/grade.svg', name: 'grade'},
  {src: '/assets/svgs/percent.svg', name: 'percent'},
  {src: '/assets/svgs/file-attach.svg', name: 'file-attach'},
  {src: '/assets/svgs/add.svg', name: 'add'},
  {src: '/assets/svgs/back.svg', name: 'back'},
  {src: '/assets/svgs/next.svg', name: 'next'}
];

@Injectable({
  providedIn: 'root'
})

export class IconsService {

  constructor(
    private iconReg: SvgIconRegistryService
  ) {
    this.loadIcons();
  }

  public loadIcons(): void {
    ICONS.forEach(i => this.iconReg.loadSvg(i.src, i.name));
  }

}
