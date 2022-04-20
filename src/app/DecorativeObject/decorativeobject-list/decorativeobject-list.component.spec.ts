import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativeobjectListComponent } from './decorativeobject-list.component';

describe('DecorativeobjectListComponent', () => {
  let component: DecorativeobjectListComponent;
  let fixture: ComponentFixture<DecorativeobjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorativeobjectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorativeobjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
