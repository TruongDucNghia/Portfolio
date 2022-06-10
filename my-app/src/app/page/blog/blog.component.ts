import { PostsService } from './../../services/posts.service';
import { posts } from './../../model/posts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  data! : posts[]
  constructor(
    private PostsService : PostsService
  ) { 
    this.PostsService.getPostsList().subscribe(data =>{
      this.data = data
    })
  }

  ngOnInit(
    
  ): void {
  }

}
