import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private apiUrl = 'https://api.jikan.moe/v3/top';

  constructor() {}

  /**
   * Get top animes
   */
  public getTopAnimes() {}
}
