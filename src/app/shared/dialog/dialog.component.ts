import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  standalone: false
})
export class DialogComponent {
  @Input() visible = false;
  @Input() title = '';
  @Input() message = '';
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit(); // Pass signal to parent
  }
}
