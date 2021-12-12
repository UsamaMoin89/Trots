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
  {src: '/assets/svgs/dashboard.svg', name: 'dashboard'},
  {src: '/assets/svgs/tutors.svg', name: 'tutors'},
  {src: '/assets/svgs/students.svg', name: 'students'},
  {src: '/assets/svgs/accounts.svg', name: 'accounts'},
  {src: '/assets/svgs/active-session.svg', name: 'active-session'},
  {src: '/assets/svgs/add-quizes.svg', name: 'add-quizes'},
  {src: '/assets/svgs/terms-and-conditions.svg', name: 'terms-and-conditions'},
  {src: '/assets/svgs/privacy-policy.svg', name: 'privacy-policy'},
  {src: '/assets/svgs/search.svg', name: 'search'},
  {src: '/assets/svgs/notification.svg', name: 'notification'},
  {src: '/assets/svgs/logout.svg', name: 'logout'},
  {src: '/assets/svgs/subject.svg', name: 'subject'},
  {src: '/assets/svgs/username.svg', name: 'username'},
  {src: '/assets/svgs/password.svg', name: 'password'}
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
