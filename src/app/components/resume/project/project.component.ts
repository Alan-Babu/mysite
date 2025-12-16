import { Component } from '@angular/core';
import { fadeUp } from '../../../animations/fadeup.animation';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  animations: [fadeUp]
})
export class ProjectComponent {
  isPublic: boolean = false;

}
