import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDecorativeObjectComponent } from './menu-decorative-object.component';

describe('MenuDecorativeObjectComponent', () => {
  let component: MenuDecorativeObjectComponent;
  let fixture: ComponentFixture<MenuDecorativeObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDecorativeObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDecorativeObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
