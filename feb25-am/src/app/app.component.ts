import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  digit = -1

  display = []

  ngOnInit() {
    for (let i = 11; i < 21; i++)
      this.display.push(i)
  }

  processDigit(d) {
    console.info('received: ', d)
    this.digit = d
  }

  reset() {
    this.digit = -1
  }
}
