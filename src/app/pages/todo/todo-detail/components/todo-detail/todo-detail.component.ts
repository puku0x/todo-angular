import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Todo } from '../../../../../models';

@Component({
  selector: 'app-todo-detail',
  template: `
    <a routerLink="/todos">Back to list</a>
    <h2>todo-detail</h2>
    <ng-container *ngIf="todo; else elseBlock">
      <p>
        <a [routerLink]="['/todos', todo?.id, 'edit']">Edit this todo</a>
      </p>
      <table>
        <tbody>
          <tr>
            <td>title</td>
            <td>{{ todo.title }}</td>
          </tr>
          <tr>
            <td>completed</td>
            <td>{{ todo.completed }}</td>
          </tr>
          <tr>
            <td>createdAt</td>
            <td>{{ todo.createdAt | date }}</td>
          </tr>
          <tr>
            <td>updatedAt</td>
            <td>{{ todo.updatedAt | date }}</td>
          </tr>
        </tbody>
      </table>
    </ng-container>
    <ng-template #elseBlock>loaging...</ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDetailComponent {
  @Input()
  todo: Todo | null = null;
}
