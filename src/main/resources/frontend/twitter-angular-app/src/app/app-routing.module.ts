import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from "./auth/log-in/log-in.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {UserComponent} from "./user/user.component";
import {CreatePostComponent} from "./create-post/create-post.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ShowPostsComponent} from "./show-posts/show-posts.component";

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full'},
  { path: 'start', component: WelcomeComponent},
  { path: 'login', component: LogInComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'edit', component: EditUserComponent},
  { path: 'user', component: UserComponent},
  { path: 'create', component: CreatePostComponent},
  {path: 'post', component: ShowPostsComponent},
  { path: '404', component:NotFoundComponent },
  { path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
