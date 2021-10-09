import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationFormComponent } from './registration/registration-form/registration-form.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state/app-reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UserTableComponent } from './registration/user-table/user-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { CustomSerializer } from './state/app-reducers/router-reducer';
import { PostsComponent } from './posts/posts/posts.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './state/post/post.effect';
import {  HttpClientModule } from '@angular/common/http';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostDetailViewerComponent } from './post/post-detail-viewer/post-detail-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    RegistrationFormComponent,
    UserTableComponent,
    PostsComponent,
    PostsListComponent,
    PostItemComponent,
    PostDetailComponent,
    PostDetailViewerComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({stateKey: 'routerReducer'}),
    EffectsModule.forRoot([PostEffects]),
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
