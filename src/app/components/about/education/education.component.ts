import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeUp } from '../../../animations/fadeup.animation';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  animations: [fadeUp]
})
export class EducationComponent {
  education = [
    {
      degree: 'M.Tech in Software Systems',
      institution: 'BITS Pilani',
      duration: '2022 – Present',
      details: [
        'Specialized in software architecture and systems design.',
        'Pursuing while working full-time.'
      ]
    },
    {
      degree: 'BCA – Bachelor of Computer Applications',
      institution: 'University of Mysore',
      duration: '2018 – 2021',
      details: [
        'Graduated with distinction.',
        'Core subjects: Data Structures, DBMS, Web Technologies.'
      ]
    }
  ];

  getPosition(index: number): string {
    const baseTop = 100;
    const spacing = 45;
    return `${baseTop + index * spacing}`;
  }
  

}
