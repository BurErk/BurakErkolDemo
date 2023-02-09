import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {
  boxRows: any[][] = [];
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }


  ngOnInit() {
    for (let i = 0; i < this.boxes.length; i += 3) {
      this.boxRows.push(this.boxes.slice(i, i + 3));
    }

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }

  boxHover(index: number) {
    const box = document.querySelector(`.box:nth-child(${index})`) as HTMLElement;
    box.style.cursor = 'pointer';
  }
  
  boxLeave(index: number) {
    const box = document.querySelector(`.box:nth-child(${index})`) as HTMLElement;
    box.style.cursor = 'default';
  }

  boxes = [  
    {    title: "Service 1",    image: "./assets/images/houseimage.png",    description: "We bring the best services right to your doorstep."  },  
    {    title: "Service 2",    image: "./assets/images/GeneralGear.png",    description: "Provided Services contain a wide range of options."  },  
    {    title: "Service 3",    image: "./assets/images/Phone.png",    description: "All our services provice 24/7 support through qualified support workers."  },
    {    title: "Service 4",    image: "./assets/images/Support.png",    description: "We make a commitment to providing fast and efficient solutions anytime."},
    {    title: "Service 5",    image: "./assets/images/TechGear.png",    description: "Our support personnel makes use of the newest technology to help you."  },
    {    title: "Service 6",    image: "./assets/images/mail.png",    description: "In tandem with our phone support we also provide a live chat support service."},
  ];

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

}
