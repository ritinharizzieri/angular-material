import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import {concat, interval, map,tap, take, takeWhile} from 'rxjs'

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {

  public loadingPercent = 0;
  public queryMode: ProgressBarMode = 'query';
  public queryValue = 0;
  public currentPlayback = 0;

  constructor() { }

  ngOnInit():void {
    this.loadingProgress(500, 100).subscribe(i => this.loadingPercent = i)

    this.loadingProgress(350, 100).subscribe(i => this.currentPlayback = i)

    concat(
      interval(2000)
      .pipe(
        take(1),
        tap(_ => (this.queryMode = 'determinate'))
      ),
      this.loadingProgress(500,100)
    ).subscribe(i => this.queryValue = i)
  }


  // funcao que altera o valor do loadingPercent
  loadingProgress(speed: number, takeUntil: number){
    return interval(speed).pipe(
      map(i => i * 5),
      takeWhile(i => i <= takeUntil)
    )
  }
}
