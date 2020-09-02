import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TvmazeService } from '../tvmaze.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tm-posterone',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
@Input() showId: number;
posterUrl$: Observable<string>

  constructor(private tbmaze:TvmazeService) { }

  ngOnInit(): void {
    this.posterUrl$ =this.tbmaze.getShow(this.showId)
    .pipe(map(show => show.image.medium));
  }

}
