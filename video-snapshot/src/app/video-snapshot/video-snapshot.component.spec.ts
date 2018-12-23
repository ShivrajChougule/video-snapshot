import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSnapshotComponent } from './video-snapshot.component';

describe('VideoSnapshotComponent', () => {
  let component: VideoSnapshotComponent;
  let fixture: ComponentFixture<VideoSnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
