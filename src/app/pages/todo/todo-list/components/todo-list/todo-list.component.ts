import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from '../../../../../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  @Input()
  offset: number | null = null;

  @Input()
  limit: number | null = null;

  @Input()
  todos: Todo[] | null = null;

  @Output()
  changeOffset = new EventEmitter<number>();

  @Output()
  changeLimit = new EventEmitter<number>();

  form = this.createForm();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      offset: [this.offset, Validators.min(0)],
      limit: [this.limit, Validators.min(0)],
    });
  }
}
