import { project } from './../../../model/project';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from './../../../services/project.service';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor(
    private ProjectService : ProjectService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { }
  project: project = {
    name: "",
    img: "",
    createAt: 0,
    tool: "",
    desc: "",
    link: ""
  }

  ngOnInit(): void {
    if (this.id) {
      this.ProjectService.getProjectDetail(this.id).subscribe(data => this.project = data)
    }
  }
  id = this.ActivatedRoute.snapshot.paramMap.get('id')
  onSubmit(){
    const date = new Date().getTime()
    this.project.createAt = date

    if (this.id) {
      this.ProjectService.updateProject(this.project).subscribe(data => 
        this.router.navigateByUrl('/admin/project/list'))
    } else {
      this.ProjectService.addProject(this.project).subscribe(data =>
        this.router.navigateByUrl('/admin/project/list'))
      
    }
    
 
  }
  async onChangeGetImg(e: any) {
    const file = e.target.files[0]
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dbpw1enlu/image/upload"
    const formData = new FormData()

    formData.append('file', file);
    formData.append('upload_preset', "cyfbktyp");
    const response = await axios.post(CLOUDINARY_API, formData, {
      headers: {
        "Content-Type": "application/form-data"
      }
    })
    this.project.img = response.data.url
  }

}
