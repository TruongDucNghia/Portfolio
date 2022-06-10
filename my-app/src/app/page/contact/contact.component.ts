import { ProjectService } from './../../services/project.service';
import { project } from './../../model/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  data!: project[]
  constructor(
    private ProjectService : ProjectService
  ) { 
    this.ProjectService.getProjectList().subscribe(data =>{
      this.data = data
    })
  }

  ngOnInit(): void {
  }

}
