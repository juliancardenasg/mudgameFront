import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMonsterComponent } from './menu-monster.component';

describe('MenuMonsterComponent', () => {
  let component: MenuMonsterComponent;
  let fixture: ComponentFixture<MenuMonsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMonsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
