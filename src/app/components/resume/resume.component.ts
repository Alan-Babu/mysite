import { Component } from '@angular/core';
import { ExperienceComponent } from "./experience/experience.component";
import { CertificationComponent } from "./certification/certification.component";

@Component({
  selector: 'app-resume',
  imports: [ExperienceComponent, CertificationComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

}
