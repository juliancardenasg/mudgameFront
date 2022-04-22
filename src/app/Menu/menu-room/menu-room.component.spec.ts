import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRoomComponent } from './menu-room.component';

describe('MenuRoomComponent', () => {
  let component: MenuRoomComponent;
  let fixture: ComponentFixture<MenuRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
