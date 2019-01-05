import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public snapshotImageName: string = "sample_snapshot";
  public snapshotImageType: string = "JPG";
}
