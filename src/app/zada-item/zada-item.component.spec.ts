import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadaItemComponent } from './zada-item.component';

describe('ZadaItemComponent', () => {
  let component: ZadaItemComponent;
  let fixture: ComponentFixture<ZadaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZadaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
