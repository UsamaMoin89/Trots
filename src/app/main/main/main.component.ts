import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {

  showSideBar = false;

  ngAfterViewInit(): void {
    document.querySelector('.nav_home').classList.add('active');

    window.onscroll = event => {
      if (event.path[1].window.pageYOffset < 600) {
        this.navItemSelected('.nav_home');
      }

      if (event.path[1].window.pageYOffset > 600 && event.path[1].window.pageYOffset < 900) {
        this.navItemSelected('.nav_contact');
      }

      if (event.path[1].window.pageYOffset > 900 && event.path[1].window.pageYOffset < 2400) {
        this.navItemSelected('.nav_privacy_policy');
      }

      if (event.path[1].window.pageYOffset > 2400) {
        this.navItemSelected('.nav_terms_and_conditions');
      }
    }
    ;
  }

  navItemSelected(item: string): void {
    const activeLinkItem = document.querySelector('.active');
    if (activeLinkItem) {
      activeLinkItem.classList.remove('active');
    }
    document.querySelector(item).classList.add('active');
  }

  blockBodyScroll(): void {
    this.showSideBar = !this.showSideBar;

    const bodyTag = document.querySelector('body');

    this.showSideBar ? bodyTag.classList.add('block-body-scroll') : bodyTag.classList.remove('block-body-scroll');
  }
}
