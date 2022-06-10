import { PostsService } from './../../../services/posts.service';
import { posts } from './../../../model/posts';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent implements OnInit {
  posts: posts = {
    name: "",
    descShort: "",
    createAt: 0,
    img: "",
    desc: ""
  }
  constructor(
    private PostsService : PostsService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.id) {
      this.PostsService.getPostsDetail(this.id).subscribe(data => this.posts = data)
    }
  }
  id = this.ActivatedRoute.snapshot.paramMap.get('id')
  onSubmit(){
    const date = Date.now()
    this.posts.createAt = date

    if (this.id) {
      this.PostsService.updatePosts(this.posts).subscribe(data => 
        this.router.navigateByUrl('/admin/posts/list'))
    } else {
      this.PostsService.addPosts(this.posts).subscribe(data =>
        this.router.navigateByUrl('/admin/posts/list'))
      
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
    this.posts.img = response.data.url
  }
}
