import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private apiUrl = 'https://api.jikan.moe/v3/top';

  constructor() {}

  /**
   * Get top animes
   */
  public getTopAnimes() {
    return of([
      {
        cover: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
        name: 'Boku No Hero',
        score: '4.5',
      },
    ]);
  }
}
