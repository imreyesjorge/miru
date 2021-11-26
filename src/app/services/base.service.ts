import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private apiUrl = 'https://api.jikan.moe/v3';

  constructor(private http: HttpClient) {}

  /**
   * Get top animes
   */
  public getTopAnimes() {
    return this.http.get(`${this.apiUrl}/top/anime`);
  }
}
