import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndRoutingModule } from './front-end-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    FrontEndRoutingModule,
    FormsModule
  ]
})
export class FrontEndModule { }
