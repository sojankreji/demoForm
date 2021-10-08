import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts/posts.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: '', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
