import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    loop: true
  };
}
