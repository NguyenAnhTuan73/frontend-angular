import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/authors';

@Component({
  selector: 'app-authors-details',
  templateUrl: './authors-details.component.html',
  styleUrls: ['./authors-details.component.css'],
})
export class AuthorsDetailsComponent implements OnInit {
  @Input() author: Author | undefined;
  constructor() {}

  ngOnInit() {}
}
