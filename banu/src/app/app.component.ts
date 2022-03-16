import { Component } from '@angular/core';
import { Movie } from './shared/Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'banu';
  temp = 'say hi to';
  moviesAvailable: Movie[];

  constructor() {
    this.moviesAvailable = [
      {name: 'ironman1', releaseYear: '2010'},
      {name: 'spideraman', releaseYear: '2012'},
      {name: 'batman', releaseYear: '2014'},
      {name: 'joker', releaseYear: '2016'},
      {name: 'avatar', releaseYear: '2012'}
    ];
  }
  

}
