import { ProjectService } from './../../../services/project.service';
import { project } from './../../../model/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {
  data!: project[]
  constructor(
    private ProjectService: ProjectService
  ) { 
    this.ProjectService.getProjectList().subscribe(data => {
      this.data = data 
    });
  }

  ngOnInit(): void {
  }
  onHandleClick(id: number){
    const action = window.confirm('Ban chac muon xoa san pham !')
    if(action){
      this.ProjectService.deleteProject(id).subscribe(data =>{
        this.data = this.data.filter(item => item.id !== id)
      })
    }
  }

}
