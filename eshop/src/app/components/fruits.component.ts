import {Component, OnInit, Output} from '@angular/core';
import {FRUITS} from '../models';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  @Output()
  selected = new Subject<string>()

  fruits = FRUITS

  constructor() { }

  ngOnInit(): void { }

  selection(name: string) {
    this.selected.next(name)
  }
}
