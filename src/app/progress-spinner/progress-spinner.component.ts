import { Component, OnInit, ViewChild } from '@angular/core';
import {first, interval, map, takeWhile, timer} from 'rxjs'
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {

  modeDesafio:ProgressBarMode = 'query';

  public loadingPercent = 0;
  public loadingPercentDesafio = 0;

  constructor() { }

  ngOnInit():void {
    this.timerMode();

    this.loadingProgress(500, 90).subscribe(i => this.loadingPercent = i)
  }


  // funcao que altera o valor do loadingPercent
  loadingProgress(speed: number, limit: number){
    return interval(speed).pipe(
      map(i => i * 5),
      takeWhile(i => i <= limit)
    )
  }

  timerMode(){

    timer(2000).pipe(first()).subscribe(() => {
      this.changeMode('determinate');

      this.loadingProgress(500,100).subscribe((i) => {
        return this.loadingPercentDesafio = i
      });
    });
  }


  changeMode(mode:ProgressBarMode) {
    this.modeDesafio = mode
  }
}
