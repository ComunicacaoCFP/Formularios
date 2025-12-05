import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFisComponent } from './form-fis.component';

describe('FormFisComponent', () => {
  let component: FormFisComponent;
  let fixture: ComponentFixture<FormFisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
