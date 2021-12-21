import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSubjectsComponent } from './selected-subjects.component';

describe('SelectedSubjectsComponent', () => {
  let component: SelectedSubjectsComponent;
  let fixture: ComponentFixture<SelectedSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
