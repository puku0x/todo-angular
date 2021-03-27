import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TodoCreateDto } from '../../../../../models';
import { TodoCreatePresenter } from './todo-create.presenter';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [TodoCreatePresenter],
})
export class TodoCreateComponent implements OnInit {
  @Input()
  isFetching: boolean | null = null;

  @Output()
  create = new EventEmitter<TodoCreateDto>();

  get formGroup(): FormGroup {
    return this.presenter.formGroup;
  }

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
