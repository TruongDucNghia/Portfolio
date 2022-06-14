import { SigninComponent } from './page/users/signin/signin.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './components/layout-client/layout-client.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './page/blog/blog.component';
import { AddProjectComponent } from './page/admin/add-project/add-project.component';
import { AddPostsComponent } from './page/admin/add-posts/add-posts.component';
import { ListPostsComponent } from './page/admin/list-posts/list-posts.component';
import { ListProjectComponent } from './page/admin/list-project/list-project.component';
import { AuthGuard } from './components/auth.guard';

const routes: Routes = [
  {path: "", component: LayoutClientComponent, children:[
    {path: '', component: HomePageComponent, pathMatch:'full'},
    {path: "blog", component: BlogComponent},
    {path: "contact", component: ContactComponent},
    {path: "signin", component: SigninComponent}
  ]},
  {path: "admin", canActivate: [AuthGuard], component: LayoutAdminComponent, children:[
    {path: "posts/add", component: AddPostsComponent},
    {path: "posts/list", component: ListPostsComponent},
    {path: "posts/:id/edit", component: AddPostsComponent},
    {path: "project/add", component: AddProjectComponent},
    {path: "project/list", component: ListProjectComponent},
    {path: "project/:id/edit", component: AddProjectComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
