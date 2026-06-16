import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeBall } from './poke-ball';

describe('PokeBall', () => {
  let component: PokeBall;
  let fixture: ComponentFixture<PokeBall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeBall],
    }).compileComponents();

    fixture = TestBed.createComponent(PokeBall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
