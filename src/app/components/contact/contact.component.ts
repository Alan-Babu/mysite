import { Component,inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder,Validators } from '@angular/forms';
import { fadeUp } from '../../animations/fadeup.animation';
import { MailserviceService } from '../../services/mailservice.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [ReactiveFormsModule],
  animations: [fadeUp]
})
export class ContactComponent {
  private formBuilder = inject(FormBuilder);
  private mailService = inject(MailserviceService);
  
  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  })

  currentStep = 1; // Tracks the current step
  charCount = 0; // Tracks the character count in the textarea
  maxCharCount = 1000; // Maximum character count for the textarea

  // Navigate to the next step
  nextStep(): void {
    if (this.currentStep < 4) {
      this.currentStep++;
    }
  }

  // Navigate to the previous step
  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Handle form submission
  submitForm(): void {
    this.mailService.sendMail(this.contactForm.value).subscribe({
      next: (response)=>{
        alert(response.message);
        this.contactForm.reset();
        this.currentStep = 1;
      },
      error: (error)=>{
        alert("There was an error sending your message. Please try again later");
      }
    });
  }

  // Update character count for the textarea
  updateCharCount(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.charCount = target.value.length;
  }
}
