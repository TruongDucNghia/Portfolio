import { project } from './../model/project';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }
  base_url : String = 'http://localhost:3000/projects'
  getProjectList(): Observable<project[]>{
    return this.http.get<project[]>(`${this.base_url}`)
  }
  getProjectDetail(id: any): Observable<project>{
    return this.http.get<project>(`${this.base_url}/${id}`)
  }
  deleteProject(id: any){
    return this.http.delete(`${this.base_url}/${id}`)
  }
  addProject(data: project): Observable<project>{
    return this.http.post<project>(`${this.base_url}`, data)
  }
  updateProject(data: project): Observable<project>{
    return this.http.put<project>(`${this.base_url}/${data.id}`, data)
  }
  get2Project(): Observable<project[]>{
    return this.http.get<project[]>(`http://localhost:3000/projects?_sort=createAt&_order=desc&_limit=3`)
  }
}
