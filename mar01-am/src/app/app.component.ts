import {HttpClient, HttpParams} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ImageOfTheDay} from './models';

// https://api.nasa.gov/planetary/apod?api_key=api_key>
// 
const URL = 'https://api.nasa.gov/planetary/apod'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	iotd: ImageOfTheDay
	canShare = false

	constructor(private http: HttpClient) { }

	ngOnInit() {
		// coerce the truthy/falsey value to boolean
		this.canShare = !!navigator['share']
	}

	async getApiKey(key: string) {
		console.info('> api key: ', key)
		// construct the query string, one or more set to set the parameters
		const params = (new HttpParams())
				.set('api_key', key)

		this.iotd = await this.http.get<ImageOfTheDay>(URL, { params }).toPromise()
	}

	async shareIt() {

		if (!this.iotd)
			return

		const shareData = {
			title: this.iotd.title,
			text: this.iotd.explanation,
			url: this.iotd.url
		}

		await navigator.share(shareData)
	}

}
