import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const BASE_URL = 'http://localhost:3000'

@Injectable()
export class TvShowService {

  constructor(private http: HttpClient) { }

  getGenres(): Promise<string[]> {
    return this.http.get<string[]>(`${BASE_URL}/genres`)
      .toPromise()
  }

}
