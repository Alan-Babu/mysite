import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNotesComponent } from './tech-notes.component';

describe('TechNotesComponent', () => {
  let component: TechNotesComponent;
  let fixture: ComponentFixture<TechNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
