import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoMenuComponent } from './resto-menu.component';

describe('RestoMenuComponent', () => {
  let component: RestoMenuComponent;
  let fixture: ComponentFixture<RestoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
