import { Component, OnInit } from '@angular/core';
import {interval, map, takeWhile} from 'rxjs'

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {

  public loadingPercent = 0;

  constructor() { }

  ngOnInit():void {
    this.loadingProgress(500).subscribe(i => this.loadingPercent = i)
  }


  // funcao que altera o valor do loadingPercent
  loadingProgress(speed: number){
    /**
     * interval() - uma funcao do rxjs que é tipo o setTimeout.
     * takeWhile() - para se desinscrever assimq que o i, for menor ou igual a 100.
     * Quando chegar a 100 deve se desinscrever do observable
     */

    return interval(speed).pipe(
      map(i => i * 5),
      takeWhile(i => i <= 100)
    )
  }
}
