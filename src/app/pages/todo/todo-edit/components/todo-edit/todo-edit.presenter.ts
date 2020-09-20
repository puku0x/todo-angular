import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { Todo, TodoUpdateDto } from '../../../../../models';

@Injectable()
export class TodoEditPresenter implements OnDestroy {
  private subject: Subject<TodoUpdateDto> = new Subject();
  update$ = this.subject.asObservable();

  todo: Todo | null = null;

  form = this.fb.group({
    title: ['', Validators.required],
    completed: [false],
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnDestroy(): void {
    this.subject.complete();
  }

  init(todo: Todo | null): void {
    if (todo !== this.todo) {
      this.form.patchValue({
        title: todo?.title ?? '',
        completed: todo?.completed ?? false,
      });
    }
    this.todo = todo;
  }

  update(): void {
    if (!this.todo) {
      return;
    }
    const id = this.todo.id;
    const title = this.form.get('title')?.value as string;
    const completed = this.form.get('completed')?.value as boolean;
    this.subject.next({
      id,
      title,
      completed,
    });
  }
}
