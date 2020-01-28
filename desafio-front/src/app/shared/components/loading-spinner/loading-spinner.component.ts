import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-loading-spinner',
  template: `
    <div class="spinner-container d-flex justify-content-center">
      <svg class="spinner" viewBox="0 0 50 50" [style.height.px]="height" [style.width.px]="width">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5">
        </circle>
      </svg>
    </div>`,
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent {
  @Input() height = 24;
  @Input() width = 24;
}
