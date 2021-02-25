import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

const IMAGE_BASE = 'assets/numbers'

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  @Input()
  digit = 0

  @Output()
  digitClicked = new Subject<number>()

  image = 'assets/numbers/number'

  constructor() { }

  ngOnInit(): void {
    this.image = `${IMAGE_BASE}/number${this.digit}.jpg`
  }

  handleClick() {
    console.info('Pressed: ', this.digit)
    // we know that image has been pressed,
    // fire the event outside of the component
    this.digitClicked.next(this.digit)
  }

}
