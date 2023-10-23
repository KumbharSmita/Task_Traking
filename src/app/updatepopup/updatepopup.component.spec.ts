import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UpdatepopupComponent } from './updatepopup.component';

describe('UpdatepopupComponent', () => {
  let component: UpdatepopupComponent;
  let fixture: ComponentFixture<UpdatepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatepopupComponent],
      //schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(UpdatepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

