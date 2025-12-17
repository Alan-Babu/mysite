import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certification',
  imports: [CommonModule],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.scss'
})
export class CertificationComponent {
  certifications = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      year: '2024',
      details: [
        'Designed distributed systems on AWS.',
        'Covered VPC, EC2, S3, Lambda, RDS, etc.'
      ]
    },
    {
      title: 'Frontend Development Certification',
      issuer: 'freeCodeCamp',
      year: '2023',
      details: [
        'Built projects with HTML, CSS, JavaScript.',
        'Completed 300+ hours of coursework.'
      ]
    }
  ];  

}
