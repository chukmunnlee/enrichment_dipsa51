import { Component, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.css']
})
export class ApiKeyComponent implements OnInit {

	@Output()
	apiKey = new Subject<string>()

	form: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
	  this.form = this.fb.group({
		  apiKey: this.fb.control('', [ Validators.required ])
	  })
  }

	processForm() {
		const key = this.form.value['apiKey']
		console.info('key: ', key)
		this.apiKey.next(key)
	}

}
