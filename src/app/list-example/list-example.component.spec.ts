import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExampleComponent } from './list-example.component';

describe('ListExampleComponent', () => {
  let component: ListExampleComponent;
  let fixture: ComponentFixture<ListExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListExampleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
