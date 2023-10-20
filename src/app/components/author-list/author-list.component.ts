import { Component, OnInit } from '@angular/core';

import { authors } from 'src/app/authors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent implements OnInit {
  authors;

  constructor() {
    this.authors = authors;
    console.log(this.authors);
  }

  ngOnInit() {}
}
