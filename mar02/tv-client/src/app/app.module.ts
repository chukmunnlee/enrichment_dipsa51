import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { GenresComponent } from './components/genres.component';
import {TvShowService} from './tvshow.service';
import { TvShowListComponent } from './components/tv-show-list.component';

const ROUTES: Routes = [
  { path: '', component: GenresComponent },
  { path: 'genre/:genre', component: TvShowListComponent },

  // do this when we do not match anything
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    TvShowListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ TvShowService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
