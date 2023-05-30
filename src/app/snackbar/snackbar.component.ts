import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMsnComponent } from './snackbar-msn/snackbar-msn.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {
 constructor(private snackbar: MatSnackBar){}

  public openSnackBar() {
    const snackbar = this.snackbar.open('hello', 'Fechar', {
      duration: 2000
    })

    // quando desaparecer ou fechar o snackbar irá aparecer o 'dismissed'
    // afterDismissed -> é quando você fechou o snackbar, e não importa necessariamente se ele foi fechado pelo usuario ou pelo timer.
    snackbar.afterDismissed().subscribe(_ => {
      console.log('dismissed')
    })


    // onAction -> é quando precisa saber sobre uma interação do usuario. Nesse caso quando o usuario clicar em fechar será disparado esse console.
    snackbar.onAction().subscribe(_ => {
      console.log('After action')
    })
  }

  //dessa forma qualquer component pode ser usado dentro de um snackbar.
  // Existe a possibilidade de colocar varias coisas além de uma mensagem de texto
  public openFromComp() {
    this.snackbar.openFromComponent(SnackbarMsnComponent, {
      data: 'Hello people',
      duration: 2500,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    })
  }


}
