import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRestoListComponent } from './admin-resto-list.component';

describe('AdminRestoListComponent', () => {
  let component: AdminRestoListComponent;
  let fixture: ComponentFixture<AdminRestoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRestoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRestoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
