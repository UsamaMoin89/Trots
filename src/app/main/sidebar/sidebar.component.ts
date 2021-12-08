import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  routes;

  constructor(
    private router: Router,
    private urs: UtilsService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.fnGenerateSideBar();
  }

  fnGenerateSideBar(): void {
   //
  }
}
