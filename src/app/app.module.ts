import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidenavBarComponent } from './components/sidenav-bar/sidenav-bar.component';
import { PostItemComponent } from './components/post-item/post-item.component';
const appRouts:Routes=[
  
  {
    path:'postItem',component:PostItemComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidenavBarComponent,
    PostItemComponent
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
