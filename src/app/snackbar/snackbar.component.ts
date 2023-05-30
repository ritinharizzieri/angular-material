import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {
 constructor(private snackbar: MatSnackBar){}

 ngOnInit(){}

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


}
