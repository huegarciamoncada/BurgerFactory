import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLegumeComponent } from './add-legume.component';

describe('AddLegumeComponent', () => {
  let component: AddLegumeComponent;
  let fixture: ComponentFixture<AddLegumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLegumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLegumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
