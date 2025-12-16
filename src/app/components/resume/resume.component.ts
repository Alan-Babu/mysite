import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienceComponent } from "./experience/experience.component";
import { CertificationComponent } from "./certification/certification.component";
import { ProjectComponent } from "./project/project.component";
import { SkillSummaryComponent } from './skill-summary/skill-summary.component';
import { fadeUp } from '../../animations/fadeup.animation';
@Component({
  selector: 'app-resume',
  imports: [ExperienceComponent, CertificationComponent, ProjectComponent, SkillSummaryComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  animations: [fadeUp]
})
export class ResumeComponent {
  constructor(private router: Router) {}

  hireMe() {
    this.router.navigate(['/contact']);
  }
}