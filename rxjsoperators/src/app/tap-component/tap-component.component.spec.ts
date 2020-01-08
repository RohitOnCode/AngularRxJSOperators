import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapComponentComponent } from './tap-component.component';

describe('TapComponentComponent', () => {
  let component: TapComponentComponent;
  let fixture: ComponentFixture<TapComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
