import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailViewerComponent } from './post-detail-viewer.component';

describe('PostDetailViewerComponent', () => {
  let component: PostDetailViewerComponent;
  let fixture: ComponentFixture<PostDetailViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDetailViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
