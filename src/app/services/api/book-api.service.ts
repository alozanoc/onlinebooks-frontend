import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { SearchResponse } from "./book.interfaces";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookApi {


  constructor(private http: HttpClient) {

  }

  public async search(q: string, currentPage: number, pageSize: number): Promise<SearchResponse> {
    return firstValueFrom(this.http.get<SearchResponse>(`${environment.API_URL}/api/books/search?title=${q}&page=${currentPage}&pageSize=${pageSize}`))
  }
}
