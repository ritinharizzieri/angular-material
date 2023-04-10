import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout'
import { Component,  } from '@angular/core';
import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isSmallScreen:boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngAfterContentInit(): void {
    // Esse observe esta analisando o tempo todo o tamanho da tela
    this.breakpointObserver.observe(['(max-width: 800px)'])
    // quando tem apenas uma função no next e ela já vai fazer tudo que precisa fazer, dai não precisa usar o next.
    .subscribe((res) => this.isSmallScreen = res.matches)

    const height = fromEvent(window, "wheel").pipe(
      map((e) => e.currentTarget?.dispatchEvent)
    );

    console.log('height', height.subscribe((e) => console.log(e)));

  }

  get sidenavMode(){
    return this.isSmallScreen ? 'over': 'side'
  }


}
