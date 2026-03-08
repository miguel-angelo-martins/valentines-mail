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
  showPhotoGallery = false;
  activePhotoIndex = 0;
  photos = [
    { src: '/escalada1.jpg', alt: 'Escalada - Filipa' },
    { src: '/escalada2.jpg', alt: 'Escalada - Miguel' },
  ];

  openInvite() {
    this.showInvite = true;
  }

  closeInvite() {
    this.showInvite = false;
  }

  openPhotoGallery() {
    this.activePhotoIndex = 0;
    this.showPhotoGallery = true;
  }

  closePhotoGallery() {
    this.showPhotoGallery = false;
  }

  previousPhoto() {
    this.activePhotoIndex =
      (this.activePhotoIndex - 1 + this.photos.length) % this.photos.length;
  }

  nextPhoto() {
    this.activePhotoIndex = (this.activePhotoIndex + 1) % this.photos.length;
  }

  toggleStar() {
    if (!this.mail) return;
    this.mail.starred = !this.mail.starred;
  }
}
