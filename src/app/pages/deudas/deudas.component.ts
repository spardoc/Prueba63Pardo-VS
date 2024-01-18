import { Component } from '@angular/core';
import { Deuda } from 'src/app/domain/deuda';
import { DeudasService } from 'src/app/services/deudas.service';

@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.component.html',
  styleUrls: ['./deudas.component.scss']
})
export class DeudasComponent {
  deudas: any

  deuda: Deuda = new Deuda()

  constructor(private deudasService: DeudasService){

  }

  ngOnInit(): void {
      this.deudas = this.deudasService.getDeudas()
  }

  guardar(){
    this.deudasService.saveCliente(this.deuda).subscribe(data => {
      console.log(data)
      if(data.codigo == 1)
        this.ngOnInit()
      else
        alert("Error al insertar " + data.mensaje)
    })
  }
}
