import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: [''],
      hideEmail: [false],
      email: ['', [Validators.required, Validators.email]],
      commentaire: ['', Validators.required]
    });

    // Masquer et désactiver la validation de l'email si la case "Hide" est cochée
    this.contactForm.get('hideEmail')?.valueChanges.subscribe((hide: boolean) => {
      const emailControl = this.contactForm.get('email');
      if (hide) {
        emailControl?.clearValidators();
        emailControl?.setValue('');
      } else {
        emailControl?.setValidators([Validators.required, Validators.email]);
      }
      emailControl?.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.saveContact(this.contactForm.value);
      alert('Le formulaire est valide');
      this.router.navigate(['/accueil']);
    }
  }
}