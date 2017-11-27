import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadaListComponent } from './zada-list.component';

describe('ZadaListComponent', () => {
  let component: ZadaListComponent;
  let fixture: ComponentFixture<ZadaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZadaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
