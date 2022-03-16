import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
  
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
