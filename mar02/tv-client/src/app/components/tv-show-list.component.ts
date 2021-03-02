import { Component, OnInit } from '@angular/core';
import {TvShowService} from '../tvshow.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TvShowSummary} from '../models';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent implements OnInit {

  genre = ''
  tvShowSummary: TvShowSummary[] = []

  constructor(private tvShowSvc: TvShowService, private activatedRoute: ActivatedRoute
      , private router: Router) { }

  ngOnInit(): void {
    this.genre = this.activatedRoute.snapshot.params.genre
    this.tvShowSvc.getTvShowSummary(this.genre)
      .then(result => this.tvShowSummary = result)
  }

  getDetails(tvid: number) {
    console.info('>>> tvId: ', tvid)
    this.router.navigate([ '/tvshow', tvid ])
  }
}
