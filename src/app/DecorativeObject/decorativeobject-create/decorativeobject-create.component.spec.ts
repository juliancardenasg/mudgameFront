import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativeobjectCreateComponent } from './decorativeobject-create.component';

describe('DecorativeobjectCreateComponent', () => {
  let component: DecorativeobjectCreateComponent;
  let fixture: ComponentFixture<DecorativeobjectCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorativeobjectCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorativeobjectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
