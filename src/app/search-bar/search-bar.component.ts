import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  term = "";
  @Output() submitted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getSearchTerm(value: string) {
    this.term = value;
  }

  submitForm(e: any) {
    e.preventDefault();
    this.submitted.emit(this.term);
  }

}
