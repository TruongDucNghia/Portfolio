import { posts } from './../model/posts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }
  base_url : String = 'http://localhost:3000/posts'
  getPostsList(): Observable<posts[]>{
    return this.http.get<posts[]>(`${this.base_url}`)
  }
  getPostsDetail(id: any): Observable<posts>{
    return this.http.get<posts>(`${this.base_url}/${id}`)
  }
  deletePosts(id: any){
    return this.http.delete(`${this.base_url}/${id}`)
  }
  addPosts(data: posts): Observable<posts>{
    return this.http.post<posts>(`${this.base_url}`, data)
  }
  updatePosts(data: posts): Observable<posts>{
    return this.http.put<posts>(`${this.base_url}/${data.id}`, data)
  }
  get2Posts(): Observable<posts[]>{
    return this.http.get<posts[]>(`http://localhost:3000/posts?_sort=createAt&_order=desc&_limit=2`)
  }
}
