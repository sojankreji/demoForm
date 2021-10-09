import { TestBed } from '@angular/core/testing';

import { PostExistGuard } from './post-exist.guard';

describe('PostExistGuard', () => {
  let guard: PostExistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostExistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
