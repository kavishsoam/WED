import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureBoxesComponent } from './picture-boxes.component';

describe('PictureBoxesComponent', () => {
  let component: PictureBoxesComponent;
  let fixture: ComponentFixture<PictureBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
