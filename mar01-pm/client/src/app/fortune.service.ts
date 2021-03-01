import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";

import { FortuneCookie } from './models'

//const SERVER_URL = 'http://localhost:3000'
//const SERVER_URL = 'https://my-fortune-cookie.herokuapp.com'
const SERVER_URL = ''

@Injectable() // like @Service() 
export class FortuneService {
	constructor(private http: HttpClient) { }

	// GET /api/fortune
	getFortuneCookie(n = 1): Promise<FortuneCookie> {
		// query params n = 1
		const params = new HttpParams().set('n', `${n}`)
		// make the call
		return this.http.get<FortuneCookie>(
			`${SERVER_URL}/api/fortune`, { params })
			.toPromise()
	}
}

