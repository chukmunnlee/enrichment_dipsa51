import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ApiKeyComponent } from './components/api-key.component';
import { DisplayComponent } from './components/display.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiKeyComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule, 
	  FormsModule, ReactiveFormsModule,
	  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
