import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { RecentPostsComponent } from './components/recent-posts/recent-posts.component';
import { FeaturedWorksComponent } from './components/featured-works/featured-works.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { BlogComponent } from './page/blog/blog.component';
import { ContactComponent } from './page/contact/contact.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LayoutClientComponent } from './components/layout-client/layout-client.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';


import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AddPostsComponent } from './page/admin/add-posts/add-posts.component';
import { ListPostsComponent } from './page/admin/list-posts/list-posts.component';
import { AddProjectComponent } from './page/admin/add-project/add-project.component';
import { ListProjectComponent } from './page/admin/list-project/list-project.component';
import { SigninComponent } from './page/users/signin/signin.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    RecentPostsComponent,
    FeaturedWorksComponent,
    FooterComponent,
    HomePageComponent,
    BlogComponent,
    ContactComponent,
    LayoutClientComponent,
    LayoutAdminComponent,
    AddPostsComponent,
    ListPostsComponent,
    AddProjectComponent,
    ListProjectComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzLayoutModule,
    NzTableModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzMenuModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
