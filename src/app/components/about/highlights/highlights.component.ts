import { Component } from '@angular/core';
import { fadeUp } from '../../../animations/fadeup.animation';

@Component({
  selector: 'app-highlights',
  imports: [],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.scss',
  animations: [fadeUp]
})
export class HighlightsComponent {

}
