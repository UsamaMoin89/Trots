import { Component, Input } from '@angular/core';
import { LoadersCSS } from 'ngx-loaders-css';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {

  @Input() isInModal = false;
  @Input() loader: LoadersCSS = 'ball-pulse';
  color = '#00C7B0';

}
