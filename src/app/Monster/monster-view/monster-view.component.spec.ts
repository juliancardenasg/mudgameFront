import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterViewComponent } from './monster-view.component';

describe('MonsterViewComponent', () => {
  let component: MonsterViewComponent;
  let fixture: ComponentFixture<MonsterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
