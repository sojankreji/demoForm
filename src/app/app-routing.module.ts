import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostExistGuard } from './posts/post-exist.guard';
import { PostsComponent } from './posts/posts/posts.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: 'posts',

    children: [
      {
        path: ':postId',
        component: PostDetailComponent,
        canActivate:[PostExistGuard]
      },
      {
        path: '',
        component: PostsComponent,
      },
    ],
  },
  { path: '', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
