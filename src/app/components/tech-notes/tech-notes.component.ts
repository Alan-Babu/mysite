import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { fadeUp } from '../../animations/fadeup.animation';

@Component({
  selector: 'app-tech-notes',
  imports: [RouterLink],
  templateUrl: './tech-notes.component.html',
  styleUrl: './tech-notes.component.scss',
  animations: [fadeUp]
})
export class TechNotesComponent {
  techNotes = [
    {
      title: 'Building a RAG-based OSS Risk Analyzer',
      description: 'How I designed an AI-powered system to analyze OSS vulnerabilities using FastAPI, NLP, and CVE data.',
      date: 'Jul 2025',
      slug: 'oss-risk-analyzer'
    }
  ];
}
