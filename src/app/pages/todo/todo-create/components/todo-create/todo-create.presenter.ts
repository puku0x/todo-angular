import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

import { TodoCreateDto } from '../../../../../models';

@Injectable()
export class TodoCreatePresenter implements OnDestroy {
  private subject: Subject<TodoCreateDto> = new Subject();
  create$ = this.subject.asObservable();

  form = this.fb.group({
    title: ['', Validators.required],
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnDestroy(): void {
    this.subject.complete();
  }

  create(): void {
    const title = this.form.get('title')?.value as string;
    this.subject.next({
      title,
    });
  }
}
