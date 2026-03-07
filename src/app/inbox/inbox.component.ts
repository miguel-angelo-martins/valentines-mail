import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAILS } from '../mock-mails';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
})
export class InboxComponent {
  @Input() folder!: 'inbox' | 'starred' | 'sent';
  @Input() search = '';
  @Input() filter: 'all' | 'unread' | 'starred' = 'all';
  @Output() open = new EventEmitter<any>();

  mails = MAILS;

  get filteredMails() {
    return this.mails
      .filter((mail) =>
        this.folder === 'starred' ? mail.starred : mail.folder === this.folder
      )
      .filter((mail) => (this.filter === 'unread' ? !mail.read : true))
      .filter(
        (mail) =>
          mail.subject.toLowerCase().includes(this.search.toLowerCase()) ||
          mail.from.toLowerCase().includes(this.search.toLowerCase())
      );
  }

  toggleStar(mail: any) {
    mail.starred = !mail.starred;
  }
}
