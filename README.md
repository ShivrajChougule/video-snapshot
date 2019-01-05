# Video Snapshot Using Angular

video-snapshot is a component for taking snapshots from the video and download those snapshots.
Also you can browse the video or paste the external video URL, play video and take snapshots. 

<p align="center">
  <img width="400" height="400" src="https://raw.githubusercontent.com/ShivrajChougule/video-snapshot/master/images/preview.JPG">
</p>

### To preview demo of video-snapshot project, [Click here](https://video-snapshot-component.stackblitz.io)

## Using the complete angular project
Download the video-snapshot folder and install the required packages and run the application.
To achieve responsiveness install bootstrap.

### Installing

```
 > npm install
```

### Run server

```
 > ng serve
```

### STEPS:

#### 1. Select a video
Select the video by clicking 'Choose File' or paste the full path video URL in textbox and then click on <b>GO</b>
##### example of sample video url :- https://www.radiantmediaplayer.com/media/bbb-360p.mp4

#### 2. Take a snapshot
Click on the 'Download Snapshot' button and snapshot of the video will download

#### 3. View the snapshot
User can able to see the downloaded snapshot on the default download path of the browser

### Pass the data to video-snapshot component as mentioned below

```html
<app-video-snapshot [snapshotName] = "snapshotImageName" [downloadImageType]= "snapshotImageType"></app-video-snapshot>
```
#### Input Decorator Description

##### 1. snapshotImageName is an input decorator which will pass the download image name to a video-snapshot component.

##### 2. snapshotImageType is an input decorator which will pass the download image type to a video-snapshot component and it supports 22 image types.

### Example of Download Image Name

```typescript
public snapshotImageName: string = 'sample_snapshot';
public snapshotImageType: string = 'JPG';
```






