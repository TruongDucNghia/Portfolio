import { PostsService } from './../../../services/posts.service';
import { posts } from './../../../model/posts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {
  data!: posts[]
  constructor(
    private PostsService: PostsService
  ) {
    this.PostsService.getPostsList().subscribe(data => {
      this.data = data 
    });
  }

  ngOnInit(): void {
  }
  onHandleClick(id: number){
    const action = window.confirm('Ban chac muon xoa san pham !')
    if(action){
      this.PostsService.deletePosts(id).subscribe(data =>{
        this.data = this.data.filter(item => item.id !== id)
      })
    }
  }

}
