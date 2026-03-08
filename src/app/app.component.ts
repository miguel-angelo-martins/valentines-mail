import { Component } from '@angular/core';
import { InboxComponent } from './inbox/inbox.component';

import { CommonModule } from '@angular/common';
import { MailViewComponent } from './mail-view/mail-view.component';
import { FormsModule } from '@angular/forms';
import { MAILS } from './mock-mails';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, InboxComponent, MailViewComponent],

  template: `
    <div class="layout" [class.mail-open]="selectedMail">
      <aside class="mini-sidebar">
        <button class="hamburger" title="Main menu">☰</button>

        <div class="mini-item active">
          <span class="mini-icon">📧</span>
          <span class="mini-label">Mail</span>
        </div>

        <div class="mini-item">
          <span class="mini-icon">💬</span>
          <span class="mini-label">Chat</span>
        </div>

        <div class="mini-item">
          <span class="mini-icon">👥</span>
          <span class="mini-label">Spaces</span>
        </div>

        <div class="mini-item">
          <span class="mini-icon">📹</span>
          <span class="mini-label">Meet</span>
        </div>
      </aside>

      <aside class="sidebar">
        <h2 class="sidebar-title">
          🌸 <span class="title-text">Valentine's Mail</span> 💖
        </h2>

        <button class="compose-btn nav" (click)="composeMail()">
          <span>✏️ Compose</span>
        </button>

        <div
          class="nav"
          [class.active]="currentFolder === 'inbox'"
          (click)="selectFolder('inbox')"
        >
          <span class="nav-icon">📥</span>
          Inbox
        </div>

        <div
          class="nav"
          [class.active]="currentFolder === 'starred'"
          (click)="selectFolder('starred')"
        >
          <span class="nav-icon">⭐</span>
          Starred
        </div>

        <div
          class="nav"
          [class.active]="currentFolder === 'sent'"
          (click)="selectFolder('sent')"
        >
          <span class="nav-icon">📤</span>
          Sent
        </div>
      </aside>

      <main class="main">
        <header class="topbar">
          <div class="search-container">
            <span class="search-icon">🔍</span>
            <input placeholder="Search mail" [(ngModel)]="search" />

            <button
              class="filter-btn"
              title="Filter mail"
              (click)="filter = filter === 'unread' ? 'all' : 'unread'"
            >
              🧰
            </button>
          </div>

          <div class="topbar-actions">
            <button class="icon-btn" title="Help & support">❓</button>
            <button class="icon-btn" title="Settings">⚙️</button>

            <div class="profile" (click)="showProfile = !showProfile">F</div>
          </div>

          <!-- Profile dropdown -->
          <div class="profile-menu" *ngIf="showProfile">
            <strong>Filipa Avidos </strong>
            <span class="email">filipa&#64;valentinesmail.com</span>
            <hr />
            <button>Manage your account</button>
            <button>Sign out</button>
          </div>
        </header>

        <section class="content" [class.mail-open-content]="selectedMail">
          <app-inbox
            *ngIf="!selectedMail"
            [folder]="currentFolder"
            [search]="search"
            [filter]="filter"
            (open)="openMail($event)"
          ></app-inbox>

          <app-mail-view
            *ngIf="selectedMail"
            [mail]="selectedMail"
            (back)="selectedMail = null"
          ></app-mail-view>
        </section>

        <!-- Compose Modal -->
        <div class="compose-modal-backdrop" *ngIf="showCompose">
          <div class="compose-modal">
            <header>
              <strong>Send New Email</strong>
              <button class="close-btn" (click)="closeCompose()">×</button>
            </header>

            <div class="compose-body">
              <label>
                To:
                <input [(ngModel)]="newMail.to" placeholder="Recipient" />
              </label>

              <label>
                Subject:
                <input [(ngModel)]="newMail.subject" placeholder="Subject" />
              </label>

              <textarea
                [(ngModel)]="newMail.body"
                placeholder="Compose your email..."
              ></textarea>
            </div>

            <footer>
              <button class="send-btn" (click)="sendMail()">📤 Send</button>
            </footer>
          </div>
        </div>
      </main>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedMail: any = null;
  currentFolder: 'inbox' | 'starred' | 'sent' = 'inbox';
  search = '';
  filter: 'all' | 'unread' | 'starred' = 'all';
  showProfile = false;

  showCompose = false;
  newMail: any = {
    to: '',
    subject: '',
    body: '',
  };
  mails = MAILS;

  // Open a mail
  openMail(mail: any) {
    mail.read = true;
    this.selectedMail = mail;
  }

  composeMail() {
    this.showCompose = true;
    this.newMail = { to: '', subject: '', body: '' };
  }

  closeCompose() {
    this.showCompose = false;
  }

  sendMail() {
    if (!this.newMail.to.trim()) return;

    const id = Math.max(...this.mails.map((m: any) => m.id)) + 1;

    this.mails.push({
      id,
      from: 'Me',
      fromEmail: 'filipa@valentinesmail.com',
      to: this.newMail.to, // store recipient
      subject: this.newMail.subject,
      body: this.newMail.body,
      date: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
      }),
      read: true,
      starred: false,
      folder: 'sent',
    });

    this.showCompose = false;
  }

  selectFolder(folder: 'inbox' | 'starred' | 'sent') {
    this.currentFolder = folder;
    this.selectedMail = null; // close any open mail
  }
}
