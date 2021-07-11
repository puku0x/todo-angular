import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { TodoCreateDto } from '../../../../../models';

@Injectable()
export class TodoCreatePresenter implements OnDestroy {
  private subject = new Subject<TodoCreateDto>();

  create$ = this.subject.asObservable();

  formGroup = this.fb.group({
    title: ['', Validators.required],
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnDestroy(): void {
    this.subject.complete();
  }

  create(): void {
    const dto: TodoCreateDto = {
      title: this.formGroup.get('title')?.value,
    };
    this.subject.next(dto);
  }
}
