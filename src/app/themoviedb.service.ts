import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviedbResponse } from './moviedb-response';


@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  constructor(
    private http: HttpClient
  ) { }

  search(term: string, pageNumber: number, type: string) {
    return this.http.get<MoviedbResponse>(`https://api.themoviedb.org/3/search/${type}`, {
      params: {
        api_key: "71b630ea20278d618d9dc9341b999b55",
        language: "en-US",
        query: term,
        page: pageNumber
      }
    });
  }
}
