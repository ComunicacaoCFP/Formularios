import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBioComponent } from './form-bio.component';

describe('FormBioComponent', () => {
  let component: FormBioComponent;
  let fixture: ComponentFixture<FormBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
