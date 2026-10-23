import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ContactService } from '../../services/contact';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [NgIf],
  templateUrl: './gestion.html',
  styleUrls: ['./gestion.scss']
})
export class GestionComponent implements OnInit {
  contactData: any = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactData = this.contactService.getContact();
  }
}