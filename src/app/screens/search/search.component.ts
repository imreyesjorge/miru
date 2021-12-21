import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public paramQuery: string;
  public searchResults: any[];

  constructor(private route: ActivatedRoute) {
    this.paramQuery = '';
    this.searchResults = [];
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (response) => {
        this.paramQuery = response.term;
      },
    });
  }
}
