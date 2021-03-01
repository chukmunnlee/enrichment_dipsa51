import { Component } from '@angular/core';
import {FortuneService} from './fortune.service';
import {FortuneCookie} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	cookies: string[] = []

	constructor(private fortuneSvc: FortuneService) { }

	getFortunes() {
		console.info('getting fortune cookie from the server')

		this.fortuneSvc.getFortuneCookie(3)
			.then((result: FortuneCookie) => {
				console.info('result = ', result)

				this.cookies = result.cookies
			})
	}
}
