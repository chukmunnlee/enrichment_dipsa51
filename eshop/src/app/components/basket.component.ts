import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Item} from '../models';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {

  private _contents: Item[] = []

  get contents(): Item[] {
    return this._contents
  }
  @Input()
  set contents(_c: Item[]) {
    this._contents = _c
    if (this.form) {
      this.items.clear();
      _c.forEach(v => {
        this.items.push(this.createItemGroup(v))
      })
    }
  }

  form: FormGroup;
  items: FormArray

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.items = this.fb.array(this._contents.map(v => this.createItemGroup(v)))
    this.form = this.fb.group({
      name: this.fb.control('', [ Validators.required ]),
      email: this.fb.control('', [ Validators.required, Validators.email ]),
      items: this.items
    })
  }

  private createItemGroup(item: Item) {
    return this.fb.group({
      name: this.fb.control(item.name, [ Validators.required ]),
      quantity: this.fb.control(item.quantity, [ Validators.required, Validators.min(1) ])
    })
  }

  dumpContents() {
    console.dir(this.form.value)
  }

}
