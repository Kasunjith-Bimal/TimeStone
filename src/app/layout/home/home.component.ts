import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images: any[];
  images1: any[];
  onImageClicked($event){
    console.log($event);
  }
  ngOnInit() {
    this.images = [];
    this.images1 = [];
    this.images.push({source:'assets/images/vechical/v1.jpg', alt:'Car', title:'Vechical'});
    this.images.push({source:'assets/images/vechical/v2.jpg', alt:'Car', title:'Vechical'});
    this.images.push({source:'assets/images/vechical/v1.jpg', alt:'Car', title:'Vechical'});
    this.images.push({source:'assets/images/vechical/v2.jpg', alt:'Car', title:'Vechical'});
    this.images.push({source:'assets/images/vechical/v1.jpg', alt:'car', title:'Vechical'});
    this.images.push({source:'assets/images/vechical/v2.jpg', alt:'car', title:'Vechical'});

    this.images1.push({source:'assets/images/cloth/galleria1.jpg', alt:'S', title:'Cloths'});
    this.images1.push({source:'assets/images/cloth/galleria2.jpg', alt:'T', title:'Cloths'});
    this.images1.push({source:'assets/images/cloth/galleria3.jpg', alt:'T', title:'Cloths'});
    this.images1.push({source:'assets/images/cloth/galleria4.jpg', alt:'S', title:'Cloths'});
    this.images1.push({source:'assets/images/cloth/galleria5.jpg', alt:'M', title:'Cloths'});
    this.images1.push({source:'assets/images/cloth/galleria6.jpg', alt:'J', title:'Cloths'});
  }

}
