import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { TodoCreateDto } from '../../../../../models';

@Injectable()
export class TodoCreatePresenter implements OnDestroy {
  form = this.fb.group({
    title: ['', Validators.required],
  });

  private subject: Subject<TodoCreateDto> = new Subject();

  constructor(private readonly fb: FormBuilder) {}

  ngOnDestroy(): void {
    this.subject.complete();
  }

  get create$(): Observable<TodoCreateDto> {
    return this.subject.asObservable();
  }

  create(): void {
    const title = this.form.get('title')?.value as string;
    this.subject.next({
      title,
    });
  }
}
