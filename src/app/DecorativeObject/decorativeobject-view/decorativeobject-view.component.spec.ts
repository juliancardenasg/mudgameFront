import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativeobjectViewComponent } from './decorativeobject-view.component';

describe('DecorativeobjectViewComponent', () => {
  let component: DecorativeobjectViewComponent;
  let fixture: ComponentFixture<DecorativeobjectViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorativeobjectViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorativeobjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
