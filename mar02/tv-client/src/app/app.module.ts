import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { GenresComponent } from './components/genres.component';
import {TvShowService} from './tvshow.service';
import { TvShowListComponent } from './components/tv-show-list.component';
import { TvDetailsComponent } from './components/tv-details.component';
import { ErrorComponent } from './components/error.component';

const ROUTES: Routes = [
  { path: '', component: GenresComponent },
  { path: 'genre/:genre', component: TvShowListComponent },
  { path: 'tvshow/:tvId', component: TvDetailsComponent },
  { path: 'error', component: ErrorComponent },
  // do this when we do not match anything
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    TvShowListComponent,
    TvDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ TvShowService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
