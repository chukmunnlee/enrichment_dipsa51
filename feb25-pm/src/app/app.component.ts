import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup
  friends: FormArray
  nameCtrl: FormControl

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.friends = this.fb.array([])
    this.nameCtrl = this.fb.control('', [ Validators.required, Validators.minLength(3) ])
    this.form = this.fb.group({
      name: this.nameCtrl,
      email: this.fb.control('', [ Validators.required, Validators.email ]),
      phone: this.fb.control(''),
      friends: this.friends
    })
  }

  addFriend() {
    //this.form.reset()
    // create a copy of the data
    const newFriend = this.fb.group({
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phone
    })

    console.info('before form: ', this.form.value)

    console.info('new friend: ', newFriend.value)

    //const arr = this.form.get('friends') as FormArray
    //arr.push(newFriend)
    this.friends.push(newFriend)

    // clear the individual fields
    //this.form.get('name').reset()
    this.nameCtrl.reset()
    this.form.get('email').reset()
    this.form.get('phone').reset()

    console.info('after form: ', this.form.value)
  }

  displayContent() {
    console.info('Dumping form contents')
    console.dir(this.form.value)
  }
}
