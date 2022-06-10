import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './components/layout-client/layout-client.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './page/blog/blog.component';

const routes: Routes = [
  {path: "", component: LayoutClientComponent, children:[
    {path: '', component: HomePageComponent, pathMatch:'full'},
    {path: "blog", component: BlogComponent},
    {path: "contact", component: ContactComponent}
  ]},
  {path: "admin", component: LayoutAdminComponent, children:[
    
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
