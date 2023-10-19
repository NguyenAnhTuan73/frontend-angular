export class Product {
  name: string;
  code: string;
  star: number = 0;

  constructor(name: string, code: string, star: number) {
    this.name = name;
    this.code = code;
    this.star = star;
  }
}
