import { Router } from '@angular/router';
import { PostsService } from './../../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  user = {
    email: "",
    password: "",
  }
  constructor(
    private PostsService : PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.PostsService.signin(this.user).subscribe(data =>{
      localStorage.setItem('user', JSON.stringify(data))
      alert(`Dang nhap thanh cong !`)
      this.router.navigateByUrl('/admin')
    })
    
  }

}
