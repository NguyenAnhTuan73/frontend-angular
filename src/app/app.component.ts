import { AfterViewInit, Component } from '@angular/core';
import { Product } from './common/product';
import { Inventor } from './common/inventor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'Angular Project';
  inventors: Inventor[] = [
    { id: 1, first: 'A', last: 'Michel', year: 1906, passed: 2000 },
    { id: 1, first: 'B', last: 'Alex', year: 1906, passed: 2000 },
    { id: 1, first: 'C', last: 'Peter', year: 1906, passed: 2000 },
  ];

  ngAfterViewInit(): void {
    this.render(this.show);
  }
  show(innerHTML: string) {
    let item = document.querySelector('#list');
    if (item) {
      item.innerHTML = innerHTML;
    }
  }

  render(callback: (data: string) => any) {
    let innerHTML = this.inventors
      .map((item) => {
        return `
      <tr>
      <td>${item.id}</td>
      <td>${item.first}</td>
      <td>${item.last}</td>
      <td>${item.year}</td>
      <td>${item.passed}</td>
      </tr>`;
      })
      .join('');
    callback(innerHTML);
  }
}
