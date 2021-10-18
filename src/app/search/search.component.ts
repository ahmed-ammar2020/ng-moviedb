import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../themoviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  data: any = [];
  types = ['movie', 'tv'];
  currentIndex = 0;
  searchTerm = '';
  page = 1;
  totalPages = 1;

  constructor(private moviedb: ThemoviedbService) {}

  ngOnInit(): void {

  }

  ngOnChanges() {
    console.log("changes");

  }

  // only executed when submitted (press enter)
  getsearchTerm(term: string) {
    // make the request
    this.moviedb
    .search(term, this.page, this.types[this.currentIndex])
    .subscribe(({ results, total_pages }) => {
      this.data = results;
      this.totalPages = total_pages;
    });

    this.searchTerm = term;
  }

  detect(index: number) {
    if (this.currentIndex === index || this.searchTerm === "") {
      this.currentIndex = index;
      return;
    }

    this.currentIndex = index;
    this.getsearchTerm(this.searchTerm);
  }
}
