import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetailPage } from './users-detail-page';

describe('UsersDetailPage', () => {
  let component: UsersDetailPage;
  let fixture: ComponentFixture<UsersDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersDetailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
