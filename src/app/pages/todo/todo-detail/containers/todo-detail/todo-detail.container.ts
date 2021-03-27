import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { TodoFacade } from '../../../../../store';

@Component({
  selector: 'app-todo-detail-container',
  templateUrl: './todo-detail.container.html',
  styleUrls: ['./todo-detail.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDetailContainerComponent implements OnInit {
  @Input()
  id: string | null = null;

  todo$ = this.todoFacade.todo$;

  constructor(private readonly todoFacade: TodoFacade) {}

  ngOnInit(): void {
    if (this.id) {
      this.todoFacade.fetch(this.id);
    }
  }
}
