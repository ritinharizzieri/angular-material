import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout'
import { Component, OnInit,  } from '@angular/core';
import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

export const SCROLL_CONTAINER = 'mat-sidenav-content'
export const TEXT_LIMIT = 50
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isSmallScreen:boolean = false;
  public popText = false
  public applyShadow = false

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(){
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
    .pipe(
      map(() => content.scrollTop)
    )
    .subscribe({
      next:(value) => this.determineHeader(value)
    })

  }

  determineHeader(top: number){
    this.popText = top >= TEXT_LIMIT
    this.applyShadow = top >= SHADOW_LIMIT
  }

  ngAfterContentInit(): void {
    // Esse observe esta analisando o tempo todo o tamanho da tela
    this.breakpointObserver.observe(['(max-width: 800px)'])
    // quando tem apenas uma função no next e ela já vai fazer tudo que precisa fazer, dai não precisa usar o next.
    .subscribe((res) => this.isSmallScreen = res.matches)

    const height = fromEvent(window, "wheel").pipe(
      map((e) => e.currentTarget?.dispatchEvent)
    );

  }

  get sidenavMode(){
    return this.isSmallScreen ? 'over': 'side'
  }


}
