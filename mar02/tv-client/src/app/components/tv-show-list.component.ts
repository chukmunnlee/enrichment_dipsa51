import { Component, OnInit } from '@angular/core';
import {TvShowService} from '../tvshow.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent implements OnInit {

  genre = ''

  constructor(private tvShowSvc: TvShowService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.genre = this.activatedRoute.snapshot.params.genre
  }

}
