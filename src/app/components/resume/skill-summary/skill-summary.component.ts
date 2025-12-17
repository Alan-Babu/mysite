import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeUp } from '../../../animations/fadeup.animation';

@Component({
  selector: 'app-skill-summary',
  imports: [CommonModule],
  templateUrl: './skill-summary.component.html',
  styleUrl: './skill-summary.component.scss',
  animations: [
    fadeUp  
  ]
})
export class SkillSummaryComponent {
  skills = [
    {
      title: 'Frontend Engineering',
      description: 'Enterprise Angular applications, reusable component architecture, performance tuning, responsive UI with Tailwind CSS.'
    },
    {
      title: 'Backend & APIs',
      description: 'FastAPI and Spring Boot services, REST API design, backend integration, performance optimization.'
    },
    {
      title: 'AI / NLP Systems',
      description: 'RAG-based chatbots, Hugging Face transformers, NLP + regex hybrid extraction, knowledge graphs.'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Dockerized deployments, CI/CD pipelines, Linux server management, Azure & AWS basics.'
    }
  ];
}
