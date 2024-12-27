import { Injectable } from '@angular/core';
import {Post} from './post';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService
{

  postList:Array<Post>=[];


  constructor(public httpClient:HttpClient)
  {
  }

  getPostApi(){


    this.httpClient.get<Array<Post>>("https://jsonplaceholder.typicode.com/posts").subscribe(posts => this.postList=posts );

  }


}
