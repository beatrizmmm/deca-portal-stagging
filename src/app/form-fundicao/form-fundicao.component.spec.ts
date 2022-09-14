import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFundicaoComponent } from './form-fundicao.component';

describe('FormFundicaoComponent', () => {
  let component: FormFundicaoComponent;
  let fixture: ComponentFixture<FormFundicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFundicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFundicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
