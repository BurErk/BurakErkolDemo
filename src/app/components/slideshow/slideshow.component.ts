import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})

export class SlideshowComponent{
currentIndex = 0;
images = [
'assets/images/image1.jpg',
'assets/images/image2.jpg',
// add more images as needed
];

ngOnInit(): void {
this.startSlideshow();
}

startSlideshow(): void {
setInterval(() => {
this.next();
}, 5000);
}

previous(): void {
this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
}

next(): void {
const currentImage = document.getElementsByClassName('imageslideshow')[0] as HTMLElement;
currentImage.classList.add('fade');
setTimeout(() => {
currentImage.classList.remove('fade');
this.currentIndex = (this.currentIndex + 1) % this.images.length;
}, 500);
}
}