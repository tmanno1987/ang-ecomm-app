import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundCompComponent } from './page-not-found-comp.component';

describe('PageNotFoundCompComponent', () => {
  let component: PageNotFoundCompComponent;
  let fixture: ComponentFixture<PageNotFoundCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
