import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { TodoUpdateDto } from '../../../../../models';
import { TodoFacade } from '../../../../../store';

@Component({
  selector: 'app-todo-edit-container',
  templateUrl: './todo-edit.container.html',
  styleUrls: ['./todo-edit.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoEditContainerComponent implements OnInit {
  @Input()
  id!: string;

  isFetching$ = this.todoFacade.isFetching$;
  todo$ = this.todoFacade.todo$;

  constructor(private readonly todoFacade: TodoFacade) {}

  ngOnInit(): void {
    this.todoFacade.fetch(this.id);
  }

  update(todo: TodoUpdateDto): void {
    this.todoFacade.update(todo);
  }
}
