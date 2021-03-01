import { Component, Input, OnInit } from '@angular/core';
import {ImageOfTheDay} from '../models';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

	@Input()
	imageOfTheDay: ImageOfTheDay

  constructor() { }

  ngOnInit(): void {
  }

}
