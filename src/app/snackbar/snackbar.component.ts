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

  snackbar.afterDismissed().subscribe(_ => {
    console.log('dismissed')
  })
}


}
