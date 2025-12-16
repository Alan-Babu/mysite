import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNoteDetailComponent } from './tech-note-detail.component';

describe('TechNoteDetailComponent', () => {
  let component: TechNoteDetailComponent;
  let fixture: ComponentFixture<TechNoteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechNoteDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechNoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
