import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout'
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngAfterContentInit(): void {
    // Esse observe esta analisando o tempo todo o tamanho da tela
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe({
      next:(res) =>{
        if(res.matches){
          // quando for menor que 800 o tamanho da tela então vai executar essa ação
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      }
    })
  }


}
