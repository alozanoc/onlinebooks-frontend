import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BookApi } from "../../services/api/book-api.service";
import { SearchResponse } from "../../services/api/book.interfaces";
import { MatInput } from "@angular/material/input";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: SearchResponse = {} as SearchResponse;

  q: string = '';

  page = {currentPage: 0, pageSize: 2, totalCount: 0}

  @ViewChild("inputelement") input!: ElementRef;

  constructor(private bookService: BookApi) {
  }

  public async ngOnInit() {
    console.log(this.books)
    await this.search()
  }

  public async search() {
    this.books = await this.bookService.search(this.q, this.page.currentPage, this.page.pageSize);
    this.page.totalCount = this.books.totalElements;
    this.input.nativeElement.select();
  }

  changePage($event: PageEvent) {
    console.log($event)
    this.page.currentPage = $event.pageIndex;
    this.search();
  }
}
