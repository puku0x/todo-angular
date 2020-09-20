import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoCreatePresenter } from './todo-create.presenter';

describe('TodoCreatePresenter', () => {
  let presenter: TodoCreatePresenter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      providers: [TodoCreatePresenter],
    });
    presenter = TestBed.inject(TodoCreatePresenter);
  });

  it('should be created', () => {
    expect(presenter).toBeTruthy();
  });
});
