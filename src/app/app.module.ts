import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidenavBarComponent } from './components/sidenav-bar/sidenav-bar.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
const appRouts:Routes=[
  
  {
    path:'postItem',component:PostItemComponent,
    
  }
  ,
  {
     path:'newsFeed' ,  component:NewsFeedComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidenavBarComponent,
    PostItemComponent,
    NewsFeedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRouts
    ),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
