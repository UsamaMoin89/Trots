import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsForQuizComponent } from './subjects-for-quiz.component';

describe('SubjectsForQuizComponent', () => {
  let component: SubjectsForQuizComponent;
  let fixture: ComponentFixture<SubjectsForQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsForQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsForQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
