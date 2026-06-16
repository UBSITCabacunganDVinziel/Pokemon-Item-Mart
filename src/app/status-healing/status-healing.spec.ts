import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusHealing } from './status-healing';

describe('StatusHealing', () => {
  let component: StatusHealing;
  let fixture: ComponentFixture<StatusHealing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusHealing],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusHealing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
