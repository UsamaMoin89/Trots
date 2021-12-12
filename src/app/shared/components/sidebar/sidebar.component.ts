import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  showSideBar = false;

  blockBodyScroll(): void {
    this.showSideBar = !this.showSideBar;

    const bodyTag = document.querySelector('body');

    this.showSideBar ? bodyTag.classList.add('block-body-scroll') : bodyTag.classList.remove('block-body-scroll');
  }

}
