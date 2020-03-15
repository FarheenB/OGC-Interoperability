import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsformComponent } from './wmsform.component';

describe('WmsformComponent', () => {
  let component: WmsformComponent;
  let fixture: ComponentFixture<WmsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
