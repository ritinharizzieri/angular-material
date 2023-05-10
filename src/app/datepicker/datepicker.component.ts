import { Component, OnInit } from '@angular/core';
import {Platform} from '@angular/cdk/platform';
import * as moment from 'moment'

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  public startDate = moment([2023, 4, 8]);
  public minDate = moment([2023, 4, 8])
  public maxDate = moment([2023, 6, 8])

  constructor(private platform: Platform) { }

  ngOnInit() {
  }

  get isTouchedDevice(){
    return this.platform.ANDROID || this.platform.IOS
  }

}
