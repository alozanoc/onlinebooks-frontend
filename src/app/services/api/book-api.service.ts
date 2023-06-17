import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { SearchResponse } from "./book.interfaces";
import { environment } from "../../../environments/environment";
import { AuthenticationService } from "../authentication/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class BookApi {

  authorizationService = inject(AuthenticationService)

  constructor(private http: HttpClient) {

  }

  public async search(q: string, currentPage: number, pageSize: number): Promise<SearchResponse> {

    return firstValueFrom(this.http.get<SearchResponse>(`${environment.API_URL}/api/books/search?title=${q}&page=${currentPage}&pageSize=${pageSize}`, {
      headers: { "Authorization": `Bearer ${this.authorizationService.credentials?.token}`}
    }))
  }
}
