import { Component, OnInit } from '@angular/core';
import {Platform} from '@angular/cdk/platform'

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  public startDate = new Date(2023, 4, 8);
  public minDate = new Date(2023, 4, 8)
  public maxDate = new Date(2023, 6, 8)

  constructor(private platform: Platform) { }

  ngOnInit() {
  }

  get isTouchedDevice(){
    return this.platform.ANDROID || this.platform.IOS
  }

}
