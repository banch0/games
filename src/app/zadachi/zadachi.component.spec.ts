import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadachiComponent } from './zadachi.component';

describe('ZadachiComponent', () => {
  let component: ZadachiComponent;
  let fixture: ComponentFixture<ZadachiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZadachiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadachiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
