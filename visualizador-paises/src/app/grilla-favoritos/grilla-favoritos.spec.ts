import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaFavoritos } from './grilla-favoritos';

describe('GrillaFavoritos', () => {
  let component: GrillaFavoritos;
  let fixture: ComponentFixture<GrillaFavoritos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrillaFavoritos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrillaFavoritos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
