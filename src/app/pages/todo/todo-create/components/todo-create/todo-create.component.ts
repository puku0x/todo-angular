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
  template: `
    <a routerLink="/todos">Back to list</a>
    <h2>todo-create</h2>
    <form [formGroup]="formGroup" (ngSubmit)="submit()">
      <p>
        <button type="submit" [disabled]="isFetching || formGroup.invalid">
          Save
        </button>
      </p>
      <table>
        <tbody>
          <tr>
            <td>title</td>
            <td>
              <input type="text" formControlName="title" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [TodoCreatePresenter],
})
export class TodoCreateComponent implements OnInit {
  @Input()
  isFetching: boolean | null = null;

  @Output()
  create = new EventEmitter<TodoCreateDto>();

  formGroup = this.presenter.formGroup;

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
