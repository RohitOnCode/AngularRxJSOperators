import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeComponenetComponent } from './take-componenet.component';

describe('TakeComponenetComponent', () => {
  let component: TakeComponenetComponent;
  let fixture: ComponentFixture<TakeComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
