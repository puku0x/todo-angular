import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { TodoCreateDto } from '../../../../../models';

@Injectable()
export class TodoCreatePresenter implements OnDestroy {
  formGroup = this.fb.group({
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
    const dto: TodoCreateDto = {
      title: this.formGroup.get('title')?.value,
    };
    this.subject.next(dto);
  }
}
