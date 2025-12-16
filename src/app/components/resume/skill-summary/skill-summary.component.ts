import { Component } from '@angular/core';
import { fadeUp } from '../../../animations/fadeup.animation';

@Component({
  selector: 'app-skill-summary',
  imports: [],
  templateUrl: './skill-summary.component.html',
  styleUrl: './skill-summary.component.scss',
  animations: [
    fadeUp  
  ]
})
export class SkillSummaryComponent {

}
