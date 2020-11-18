import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail-page',
  templateUrl: './todo-detail.page.html',
  styleUrls: ['./todo-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDetailPageComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {}
}
