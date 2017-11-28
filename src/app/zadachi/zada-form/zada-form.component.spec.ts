import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadaFormComponent } from './zada-form.component';

describe('ZadaFormComponent', () => {
  let component: ZadaFormComponent;
  let fixture: ComponentFixture<ZadaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZadaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
