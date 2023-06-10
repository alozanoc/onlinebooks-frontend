import { Component, OnInit } from '@angular/core';
import { BookService } from "../../services/book.service";
import { SearchResponse } from "../../services/book.interfaces";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: SearchResponse = {} as SearchResponse;

  q: string = '';

  constructor(private bookService: BookService) {
  }

  public async ngOnInit() {
    console.log(this.books)
    await this.search()
  }

  public async search() {
    this.books = await this.bookService.search(this.q);
  }

}
