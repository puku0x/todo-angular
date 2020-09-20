import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListPageComponent implements OnInit {
  offset$ = this.route.queryParams.pipe(map((param) => +(param.offset || '0')));
  limit$ = this.route.queryParams.pipe(map((param) => +(param.limit || '10')));
  vm$ = combineLatest([this.offset$, this.limit$]).pipe(
    map(([offset, limit]) => ({ offset, limit }))
  );

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {}
}
