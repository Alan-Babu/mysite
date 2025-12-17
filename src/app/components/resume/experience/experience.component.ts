import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeUp } from '../../../animations/fadeup.animation';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [fadeUp]
})
export class ExperienceComponent {
  experiences: any[] = [
    {
      role: "Full Stack Developer",
      company: "Wipro Technologies Ltd",
      duration: "Dec 2021 - Present",
      location: "Coimbatore, India",
      responsibilities: [
        "<strong>Designed and developed</strong> scalable <em>Angular (10–19)</em> applications using reusable, component-driven architecture.",
        "<strong>Built and integrated</strong> REST APIs using Python (FastAPI, Flask) and Java (Spring Boot).",
        "<strong>Refactored</strong> legacy UI code into modular Angular components, improving maintainability and readability.",
        "<strong>Enhanced</strong> mobile responsiveness by <em>~35%</em> using Tailwind CSS optimizations.",
        "<strong>Reduced</strong> UI-related production defects by <em>~25%</em> through cross-browser debugging and fixes.",
        "<strong>Managed</strong> Linux server deployments and performed JVM performance tuning.",
        "<strong>Collaborated</strong> with cross-functional teams in Agile / Scrum environments using Jira and Confluence."
      ]
    }
  ]

}
