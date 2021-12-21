import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public paramQuery: string;

  constructor(private route: ActivatedRoute) {
    this.paramQuery = '';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next: (response) => {
        this.paramQuery = response.term;
      },
    });
  }
}
