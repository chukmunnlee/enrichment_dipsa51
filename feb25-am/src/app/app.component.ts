import { Component, OnInit } from '@angular/core';
import { DisplayRange } from './components/pager.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  digit = -1

  display = []

  ngOnInit() {
    this.pageTo({ min: 0, max: 10 })
  }

  processDigit(d) {
    console.info('received: ', d)
    this.digit = d
  }

  reset() {
    this.digit = -1
  }

  pageTo(range: DisplayRange) {
    this.display = []
    for (let i = range.min; i < (range.max + 1); i++)
      this.display.push(i)
  }

}
