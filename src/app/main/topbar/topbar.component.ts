import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  @Input() topbarTitle;

  constructor(
    private r2: Renderer2,
    private us: UtilsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //
  }

}
