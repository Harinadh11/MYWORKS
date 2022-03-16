import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../shared/Movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  @Input()
  moviesList: Movie[];
  movieSearched: string;

  searchedMovies : Movie[];
  moviesListfilter: this;

  ngOnInit(): void {
  }

  searchMovies(){
  this.searchedMovies=this.moviesList.filter(movie=>movie.releaseYear===this.movieSearched);
    }
  }



