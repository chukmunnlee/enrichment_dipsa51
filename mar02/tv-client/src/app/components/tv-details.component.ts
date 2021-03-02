import { Component, OnInit } from '@angular/core';
import {TvShowService} from '../tvshow.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TvShowDetails} from '../models';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {

  tvShow: TvShowDetails;

  constructor(private tvShowSvc: TvShowService, private activatedRoute: ActivatedRoute
      , private router: Router) { }

  ngOnInit(): void {
    const tvId = parseInt(this.activatedRoute.snapshot.params['tvId'])
    this.tvShowSvc.getTvShowDetails(tvId)
      .then(result => {
        this.tvShow = result
        console.info('>>> result: ', result)
      })
      .catch(error => {
        console.error('ERROR: ', error)
        this.router.navigate(['/error'])
      })
  }

}
