import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

import { Todo, TodoUpdateDto } from '../../../../../models';
import { TodoEditPresenter } from './todo-edit.presenter';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TodoEditPresenter],
})
export class TodoEditComponent implements OnInit, OnChanges {
  @Input()
  isFetching: boolean | null = null;

  @Input()
  todo: Todo | null = null;

  @Output()
  update = new EventEmitter<TodoUpdateDto>();

  form = this.presenter.form;

  constructor(private readonly presenter: TodoEditPresenter) {}

  ngOnInit(): void {
    this.presenter.update$.subscribe((todo) => {
      this.update.emit(todo);
    });
  }

  ngOnChanges(): void {
    this.presenter.init(this.todo);
  }

  submit(): void {
    this.presenter.update();
  }
}
