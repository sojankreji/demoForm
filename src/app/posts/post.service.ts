import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../state/post/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private API_PATH = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private http: HttpClient) {}

  searchPosts(queryTitle: string): Observable<Post[]> {
    return this.http
      .get(
        queryTitle != '' ? `${this.API_PATH}?q=${queryTitle}` : this.API_PATH
      )
      .pipe(map((res: Post[]) => res));
  }
  getPost(postID: string): Observable<Post> {
    return this.http
      .get(
       `${this.API_PATH}/${postID}`
      )
      .pipe(map((res: Post) => res));
  }



}
