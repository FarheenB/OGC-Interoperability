import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfsformComponent } from './wfsform.component';

describe('WfsformComponent', () => {
  let component: WfsformComponent;
  let fixture: ComponentFixture<WfsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
