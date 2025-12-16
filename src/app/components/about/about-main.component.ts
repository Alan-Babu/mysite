import { Component } from '@angular/core';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './aboutintro/about.component';
import { TechstackComponent } from './techstack/techstack.component';
import { HighlightsComponent } from './highlights/highlights.component';
@Component({
  selector: 'app-about-main',
  imports: [AboutComponent, TechstackComponent, HighlightsComponent, EducationComponent],
  templateUrl: './about-main.component.html',
  styleUrl: './about-main.component.scss'
})
export class AboutMainComponent {

}
