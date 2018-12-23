# Video Snapshot Using Angular

video-snapshot is a simple component for taking snapshots from video and download.
Use the video-snapshot to take the snapshots of video and download it. 
Also you can paste the video URL and download snapshots of that video. 

<p align="center">
  <img width="500" height="300" src="https://raw.githubusercontent.com/ShivrajChougule/image-color-picker/master/image-color-picker/img/output2.png">
</p>

## To preview demo of image-color-picker project, [Click here](https://stackblitz.com/edit/video-snapshot?embed=1&file=src/app/app.component.ts&hideExplorer=1&hideNavigation=1&view=preview)

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

### 1] Select an Image
Select the image by clicking 'Choose File'

### 2] Pick a Color
Click anywhere on the image and you will get that pixel color

### 3] Preview
By clicking on image you can see the current pixel color in the preview box

### 4] Copy Color Code
By clicking on image you will get RGBA and HEX values in textboxes, you can copy any color code and use it in your application


## @Output Decorator
@Output has been used to provide user with required output. For this i have used EventEmitter, whenever some event will be called user will get result.

### Below method will give HEX and RGBA values.

```typescript
getcolval(event)
{
console.log(event);
}
```

### outputColor is the output event name I have used.

```html
<app-imgcol (outputColor)="getcolval($event)"></app-imgcol>
```






