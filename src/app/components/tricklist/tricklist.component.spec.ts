import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TricklistComponent } from './tricklist.component';

describe('TricklistComponent', () => {
  let component: TricklistComponent;
  let fixture: ComponentFixture<TricklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TricklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TricklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
