import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public paramQuery: string;
  public searchResults: any[];

  constructor(private route: ActivatedRoute, private baseService: BaseService) {
    this.paramQuery = '';
    this.searchResults = [];
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        switchMap((result) => {
          this.paramQuery = result.term;
          return this.baseService.searchAnime(result.term);
        })
      )
      .subscribe({
        next: (response: any) => {
          this.searchResults = response.results;
        },
      });
  }
}
