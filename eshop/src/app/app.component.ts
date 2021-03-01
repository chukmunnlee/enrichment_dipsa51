import { Component } from '@angular/core';
import {Item} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  basket: Item[] = []

  addToBasket(name: string) {
    const idx = this.basket.findIndex(v => v.name == name)
    const tmpBasket = [ ...this.basket ]
    if (idx < 0)
      tmpBasket.push({ name, quantity: 1})
    else
      tmpBasket[idx].quantity += 1
    this.basket = tmpBasket

  }
}
