import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WcsformComponent } from './wcsform.component';

describe('WcsformComponent', () => {
  let component: WcsformComponent;
  let fixture: ComponentFixture<WcsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WcsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
