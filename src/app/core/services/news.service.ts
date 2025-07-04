import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private apiKey = environment.newsApiKey;
  private baseUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) {}

  getTopHeadlines(category?: string, query?: string): Observable<any> {
    let params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('country', 'us');
    if (category) params = params.set('category', category);
    if (query) params = params.set('q', query);

    return this.http
      .get(`${this.baseUrl}/top-headlines`, { params })
      .pipe(map((res: any) => res.articles));
  }
}
