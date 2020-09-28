import {Input} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {IRating} from '../irating';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  max = 5;

  @Input()
  ratingValue = 5;

  @Input()
  showRatingValue = true;

  ratingUnits: Array<IRating> = [];


  resetHighlight(): void {
    this.ratingUnits.forEach((item, index) => {
      if (index < this.ratingValue){
        item.active = true;
      }else {
        item.active = false;
      }
    });
  }

  showHighlight(currentIndex: number): void{
    this.ratingUnits.forEach((item, index) => {
      if (index <= currentIndex){
        item.active = true;
      }else {
        item.active = false;
      }
    });
  }

  doRating(rating: number) {
    this.ratingValue = rating + 1;
  }

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < this.max; i++) {
      const obj = {
        value: i + 1,
        active: i < this.max ? true : false
      };
      this.ratingUnits.push(obj);
    }
  }

}
