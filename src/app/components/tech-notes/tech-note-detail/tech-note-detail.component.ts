import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';

@Component({
  selector: 'app-tech-note-detail',
  imports: [RouterLink],
  templateUrl: './tech-note-detail.component.html',
  styleUrl: './tech-note-detail.component.scss'
})
export class TechNoteDetailComponent implements OnInit {
  slug!: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('id') || '';
  }

}
