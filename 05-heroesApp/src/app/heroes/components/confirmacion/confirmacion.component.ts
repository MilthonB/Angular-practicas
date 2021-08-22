import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styles: [
  ]
})
export class ConfirmacionComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmacionComponent> ,
               @Inject(MAT_DIALOG_DATA) public heroe: Heroe) { }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  borrar(){
    this.dialogRef.close(true);
  }


}
