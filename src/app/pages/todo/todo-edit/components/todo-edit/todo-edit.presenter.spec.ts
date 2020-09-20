import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoEditPresenter } from './todo-edit.presenter';

describe('TodoEditPresenter', () => {
  let presenter: TodoEditPresenter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      providers: [TodoEditPresenter],
    });
    presenter = TestBed.inject(TodoEditPresenter);
  });

  it('should be created', () => {
    expect(presenter).toBeTruthy();
  });
});
