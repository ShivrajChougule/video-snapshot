import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-video-snapshot',
  templateUrl: './video-snapshot.component.html',
  styleUrls: ['./video-snapshot.component.css']
})
export class VideoSnapshotComponent {
  @ViewChild('videoElement') public videoElement: ElementRef;
  @Input('snapshotName') public snapshotName: string;
  @Input('downloadImageType') public userImageType: string;
  public videoUrl: any;
  public videoLoaded = false;
  public loadingState = false;
  public imageTypes = ['JPG', 'PNG', 'BMP', 'TIFF', 'GIF', 'PPM', 'PGM', 'PBM', 'PNM', 'WebP', 'HEIF', 'BPG', 'ECW', 'FITS', 'FLIP', 'PAM', 'CD5', 'CPT', 'PSD', 'PSP', 'XCF', 'PDN'];
  constructor(private http: HttpClient) {}
  public readUrl(event, linkUrl) {
    linkUrl.value = '';
    this.loadingState = true;
    this.videoLoaded = false;
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (data: any) => {
        this.playVideo(data.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  public getLink(linkUrl, fileElement) {
    fileElement.value = '';
    if (linkUrl.value.trim() !== '') {
    this.loadingState = true;
    this.videoLoaded = false;
    this.http.get(linkUrl.value.trim(), { responseType: 'blob' }).subscribe((res) => {
      const reader = new FileReader();
      reader.readAsDataURL(res);
      reader.onload = (data: any) => {
        this.playVideo(data.target.result);
      };
    },
    (err) => {
        linkUrl.value = '';
        alert('Invalid URL');
        this.loadingState = false;
        this.videoLoaded = false;
    }
    );
    }
  }
  public takeSnapshot() {
    const canvasElement = <HTMLCanvasElement> document.createElement('CANVAS');
    const video = this.videoElement.nativeElement;
    const context = canvasElement.getContext('2d');
    let w: number, h: number, ratio: number;
    ratio = video.videoWidth / video.videoHeight;
    w = video.videoWidth - 100;
    h = w / ratio;
    canvasElement.width = w;
    canvasElement.height = h;
    context.fillRect(0, 0, w, h);
    context.drawImage(video, 0, 0, w, h);
    const link = document.createElement('a');
    this.snapshotName = this.snapshotName !== '' ?  this.snapshotName : 'snapshot';
    this.userImageType = this.imageTypes.indexOf(this.userImageType.toUpperCase()) >= 0 ? this.userImageType.toUpperCase() : 'PNG';
    link.setAttribute('download', this.snapshotName + '.' + this.userImageType);
    const dataURL = canvasElement.toDataURL();
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
  }
  public playVideo(url) {
    this.loadingState = false;
    this.videoLoaded = true;
    this.videoUrl = url;
    if (this.videoElement !== undefined) {
      this.videoElement.nativeElement.load();
    }
  }
}

