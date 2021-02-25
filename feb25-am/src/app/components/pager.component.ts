import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

export interface DisplayRange {
  min: number
  max: number
}

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Output()
  displayRage = new Subject<DisplayRange>()

  constructor() { }

  ngOnInit(): void { }

  page(idx: number) {
    console.info('>> idx: ', idx)
    // fill in this part
    let range: DisplayRange;

    switch (idx) {
      case 0:
        range = { min: 1, max: 10 }
        break;
      case 1:
        range = { min: 11, max: 20 }
        break;
      case 2:
        range = { min: 21, max: 30 }
        break;
      default:
        return
    }

    this.displayRage.next(range)
  }

}
