import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import * as fromPost from '../state/post';

import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class PostExistGuard implements CanActivate {
  constructor(private store: Store,private postService: PostService) {}

  waitForCollectionToLoad(): Observable<boolean> {
    return this.store.select(fromPost.isSelectedPostLoaded).pipe(
      tap(x => x?null:this.store.dispatch(fromPost.loadSelectedPost())),
      filter((loaded) => loaded),
      take(1)
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.waitForCollectionToLoad();
  }
  // hasPost() {
  //   return this.hasPostInStore().pipe(
  //     switchMap((inStore) => {
  //       if (inStore) {
  //         return of(inStore);
  //       }

  //       return this.hasPostInApi();
  //     })
  //   );
  // }

  // // hasPostInApi(): Observable<boolean> {
  // //   return this.postService
  // // }

  // hasPostInStore(): Observable<boolean> {
  //   return this.store.select(fromPost.selectSelectedPost).pipe(
  //     map((entities) => true),
  //     take(1)
  //   );
  // }
}
