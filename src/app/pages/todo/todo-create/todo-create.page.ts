import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-create-page',
  templateUrl: './todo-create.page.html',
  styleUrls: ['./todo-create.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCreatePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
