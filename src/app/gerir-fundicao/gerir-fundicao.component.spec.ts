import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirFundicaoComponent } from './gerir-fundicao.component';

describe('GerirFundicaoComponent', () => {
  let component: GerirFundicaoComponent;
  let fixture: ComponentFixture<GerirFundicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerirFundicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerirFundicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
