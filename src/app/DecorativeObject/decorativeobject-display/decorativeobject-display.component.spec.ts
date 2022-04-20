import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativeobjectDisplayComponent } from './decorativeobject-display.component';

describe('DecorativeobjectDisplayComponent', () => {
  let component: DecorativeobjectDisplayComponent;
  let fixture: ComponentFixture<DecorativeobjectDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorativeobjectDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorativeobjectDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
