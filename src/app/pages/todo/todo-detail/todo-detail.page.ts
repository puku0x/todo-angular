import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail-page',
  template: `
    <app-todo-detail-container [id]="id"></app-todo-detail-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDetailPageComponent {
  id = this.route.snapshot.paramMap.get('id');

  constructor(private readonly route: ActivatedRoute) {}
}
