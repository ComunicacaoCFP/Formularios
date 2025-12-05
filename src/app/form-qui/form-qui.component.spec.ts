import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuiComponent } from './form-qui.component';

describe('FormQuiComponent', () => {
  let component: FormQuiComponent;
  let fixture: ComponentFixture<FormQuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormQuiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormQuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
