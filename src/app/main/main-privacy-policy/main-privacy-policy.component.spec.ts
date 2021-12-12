import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPrivacyPolicyComponent } from './main-privacy-policy.component';

describe('MainPrivacyPolicyComponent', () => {
  let component: MainPrivacyPolicyComponent;
  let fixture: ComponentFixture<MainPrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPrivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
