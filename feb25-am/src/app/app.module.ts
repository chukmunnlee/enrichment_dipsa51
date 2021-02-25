import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumbersComponent } from './components/numbers.component';
import { PagerComponent } from './components/pager.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    PagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
