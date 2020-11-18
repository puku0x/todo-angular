import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { TodoCreateDto } from '../../../../../models';
import { TodoCreatePresenter } from './todo-create.presenter';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TodoCreatePresenter],
})
export class TodoCreateComponent implements OnInit {
  @Input()
  isFetching: boolean | null = null;

  @Output()
  create = new EventEmitter<TodoCreateDto>();

  form = this.presenter.form;

  constructor(private readonly presenter: TodoCreatePresenter) {}

  ngOnInit(): void {
    this.presenter.create$.subscribe((todo) => {
      this.create.emit(todo);
    });
  }

  submit(): void {
    this.presenter.create();
  }
}
