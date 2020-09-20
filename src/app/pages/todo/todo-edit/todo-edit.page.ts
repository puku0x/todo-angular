import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-edit-page',
  templateUrl: './todo-edit.page.html',
  styleUrls: ['./todo-edit.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoEditPageComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {}
}
