import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactData: any = null;

  saveContact(data: any): void {
    this.contactData = data; // Écrase le formulaire précédent à chaque envoi
  }

  getContact(): any {
    return this.contactData;
  }
}