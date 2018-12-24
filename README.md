# Video Snapshot Using Angular

video-snapshot is a simple component for taking snapshots from the video and download those snapshots.
Use the video-snapshot to take the snapshots of video and download it. 
Also you can paste the external video URL, play video and take snapshots from external video. 

<p align="center">
  <img width="400" height="400" src="https://raw.githubusercontent.com/ShivrajChougule/video-snapshot/master/images/preview.JPG">
</p>

## To preview demo of video-snapshot project, [Click here](https://stackblitz.com/edit/video-snapshot?embed=1&file=src/app/app.component.ts&hideExplorer=1&hideNavigation=1&view=preview)

## Using the complete angular project
Download the video-snapshot folder and install the required packages and run the application.

### Installing

```
 >npm install
```

### Run server

```
 >ng serve
```

## STEPS:

### 1] Select a video
Select the video by clicking 'Choose File' or paste the video URL in textbox and then click on GO.

### 2] Take a snapshot
Click on the 'Download Snapshot' button and snapshot of video will download

### 3] View the snapshot
User can able to see the downloaded snapshot at the default download path of the browser

### Pass the data to video-snapshot component as mentioned below

```html
<app-video-snapshot [snapshotName] = "snapshot"></app-video-snapshot>
```
#### snapshotName is a Input decorator which will pass the download image name to a video-snapshot component

### Example of Image Name

```typescript
public snapshot = 'sample_snapshot';
```






