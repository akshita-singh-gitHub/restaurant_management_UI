import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoOwnerComponent } from './resto-owner.component';

describe('RestoOwnerComponent', () => {
  let component: RestoOwnerComponent;
  let fixture: ComponentFixture<RestoOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
