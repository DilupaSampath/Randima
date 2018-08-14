import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Posts {
  user:string;
  date:string;
  title: string;
  body: string;
}
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  Posts:Posts[];
 

  constructor(private http: HttpClient) { 
    this.comments=[{ name:'saa'},{ name:'saa'},{ name:'saa'},{ name:'saa'},{ name:'saa'}];
  }
  comments:any[];
  ngOnInit() {
    this.getPosts().subscribe(
      (data: any[]) => {
        console.log("an init works--> " + JSON.stringify(data));
        this.Posts = data;
       
      }
    );
    this.comments=[{ name:'saa'},{ name:'saa'},{ name:'saa'},{ name:'saa'}];
// console.log(    this.comments.length)
  }
  getPosts() {
    return this.http.get('http://127.0.0.1:3000/postsModel/posts');
  }
  asd(){
    jQuery('#input_starttime').slideToggle({});
  }

}
