import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent {

  constructor(public matDialogRef: MatDialogRef<DialogModalComponent>){}

  public closeDialog(){
    this.matDialogRef.close()
  }
}
