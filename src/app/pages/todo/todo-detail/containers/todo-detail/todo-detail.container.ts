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
  styleUrls: ['./todo-detail.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDetailContainerComponent implements OnInit {
  @Input()
  id!: string;

  todo$ = this.todoFacade.todo$;

  constructor(private readonly todoFacade: TodoFacade) {}

  ngOnInit(): void {
    this.todoFacade.fetch(this.id);
  }
}
