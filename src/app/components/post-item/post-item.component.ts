import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AOS from 'aos';
import * as $ from 'jquery'
interface Posts {
  user:string;
  date:string;
  title: string;
  body: string;
}
// @HostListener('window:scroll', ['$event']) 
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  Posts:Posts[];
  user:any;
  postTitle:any;
  postDate:any;
  postDescription:any;


  constructor(private http: HttpClient) { 
    this.comments=[{ name:'saa'},{ name:'saa'},{ name:'saa'},{ name:'saa'},{ name:'saa'}];
    
  }

  comments:any[];
  ngOnInit() {


$(document).ready(function(){
  $('#btn1').click(function(){
  
  
      // alert('sad');
      
  
  
  });
});

    AOS.init();
    
    //
    this.getPosts().subscribe(
      (data: any[]) => {
        console.log("an init works--> " +data.length);
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
   
  }
addPost(){
  console.log("click");
 
  let postData= {
    'user':"Dilupa Sampath",
    'date':this.postDate,
    'title':this.postTitle,
    'body':this.postDescription
    }
    console.log(postData);
  this.http.post('http://localhost:3000/postsModel/posts',postData).subscribe((data:any)=>{
    console.log(data);
    this.getPosts().subscribe(
      (data: any[]) => {
        console.log("an init works--> " + JSON.stringify(data));
        this.Posts = data;
        this.launch_toast2();
      }
    );
  });
}
launch_toast2() {
  var x = document.getElementById("toast1")
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}
}
