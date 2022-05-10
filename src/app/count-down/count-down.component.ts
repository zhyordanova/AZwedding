import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  private subscription!: Subscription;

  public dateNow = new Date();
  public weddingDay = new Date('May 28 2022 12:00:00');

  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  secondsInAMinute = 60;

  public timeDifference: any;
  public secondsToWeddingDay: any;
  public minutesToWeddingDay: any;
  public hoursToWeddingDay: any;
  public daysToWeddingDay: any;

  private getTimeDifference() {
    this.timeDifference = this.weddingDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference: any) {
    this.secondsToWeddingDay = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.secondsInAMinute);
    this.minutesToWeddingDay = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.secondsInAMinute);
    this.hoursToWeddingDay = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.secondsInAMinute) % this.hoursInADay);
    this.daysToWeddingDay = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.secondsInAMinute * this.hoursInADay));
  }


  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference(); });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
