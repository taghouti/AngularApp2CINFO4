import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BestLikeComponent} from './best-like.component';

describe('BestLikeComponent', () => {
  let component: BestLikeComponent;
  let fixture: ComponentFixture<BestLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BestLikeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
