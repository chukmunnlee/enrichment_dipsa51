import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TvShowDetails, TvShowSummary} from './models';

const BASE_URL = 'http://localhost:3000'

@Injectable()
export class TvShowService {

  constructor(private http: HttpClient) { }

  getGenres(): Promise<string[]> {
    return this.http.get<string[]>(`${BASE_URL}/api/genres`)
      .toPromise()
  }

  getTvShowSummary(genre: string): Promise<TvShowSummary[]> {
    return this.http.get<TvShowSummary[]>(`${BASE_URL}/api/genre/${genre}`)
      .toPromise()
  }

  getTvShowDetails(tvid: number): Promise<TvShowDetails> {
    return this.http.get<TvShowDetails>(`${BASE_URL}/api/tvshow/${tvid}`)
      .toPromise()
  }

}
