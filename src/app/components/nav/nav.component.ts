import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  private searchInput: HTMLInputElement | null = null;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.searchInput = document.querySelector('#searchInput');
  }

  onSearch(searchedTerm: string | null) {
    this.route.navigate(['/search'], {
      queryParams: { term: searchedTerm },
    });
  }

  // KeyboardEvent type not working properly?
  handleTypeSearch(event: any) {
    if (event.key == 'Enter' && event.target.value) {
      this.onSearch(event.target.value);
    }
  }

  handleClickSearch() {
    if (this.searchInput) {
      this.onSearch(this.searchInput.value);
    }
  }
}
