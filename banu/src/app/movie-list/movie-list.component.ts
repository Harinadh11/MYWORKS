import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  @Input()
  moviesList: Movie[];

  constructor() { }
  ngOnInit(): void {
    
  }

  
}



