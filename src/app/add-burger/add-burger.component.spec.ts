import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBurgerComponent } from './add-burger.component';

describe('AddBurgerComponent', () => {
  let component: AddBurgerComponent;
  let fixture: ComponentFixture<AddBurgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBurgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
