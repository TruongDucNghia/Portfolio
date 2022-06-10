import { posts } from './../../model/posts';
import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {
  data! :posts[]
  constructor(
    private PostsService: PostsService
  ) { 
    this.PostsService.get2Posts().subscribe(data =>{
      this.data = data
      console.log(data);
      
    })
  }

  ngOnInit(): void {
  }

}
