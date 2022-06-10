import { ProjectService } from './../../services/project.service';
import { project } from './../../model/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-works',
  templateUrl: './featured-works.component.html',
  styleUrls: ['./featured-works.component.scss']
})
export class FeaturedWorksComponent implements OnInit {
  data!: project[]
  constructor(
    private ProjectService : ProjectService
  ) { 
    this.ProjectService.get2Project().subscribe(data =>{
      this.data = data
    })
  }

  ngOnInit(): void {
  }

}
