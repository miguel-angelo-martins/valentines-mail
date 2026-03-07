import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mail-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mail-view.component.html',
  styleUrl: './mail-view.component.css',
})
export class MailViewComponent {
  @Input() mail: any;
  @Output() back = new EventEmitter<void>();

  showInvite = false;

  openInvite() {
    this.showInvite = true;
  }

  closeInvite() {
    this.showInvite = false;
  }
}
