import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundicaoComponent } from './fundicao.component';

describe('FundicaoComponent', () => {
  let component: FundicaoComponent;
  let fixture: ComponentFixture<FundicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
