import { Component, OnInit } from '@angular/core';
import { CuboNorthwindService } from '../../services/cubo-northwind.service';
import { Label } from 'ng2-charts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  dataDimension: Label[] = [];
  dataValues: number[] = [];
  anios: string[];
  meses: string[];
  dimensiones = [
    { value: 1, label: 'Cliente', dimension: '[Dim Cliente].[Dim Cliente Nombre]' },
    { value: 2, label: 'Producto', dimension: '[Dim Producto].[Dim Producto Nombre]' },
    { value: 3, label: 'Empleado', dimension: '[Dim Empleado].[Dim Empleado Nombre]' }
  ];

  selectedMes = '';
  
  selectedAnio = '';
  selectedDim = 'cliente';
  
  constructor(private svc: CuboNorthwindService) {
    this.anios = ["1996","1997","1998"]
    this.meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio" , "Agosto" , "Septiembre" , "Octubre", "Noviembre" , "Diciembre"]
  }
  Anio($event) {
    this.selectedAnio = $event;
    this.PintarGrafico();
  }
  Mes($event) {
    this.selectedMes = $event;
    this.PintarGrafico();
  }
  Dimension($event) {
    this.selectedDim = $event['dimension'];
    this.PintarGrafico();
  }
  PintarGrafico() {
    this.dataDimension = [];
    this.dataValues = [];
    this.svc
      .Top5Dimensions(this.selectedDim, this.selectedAnio, this.selectedMes, 'DESC')
      .subscribe((result: any) => {
        console.log(result);
          this.dataDimension = result.datosDimension;
          this.dataValues = result.datosVenta;
        console.log(this.dataDimension);
        

      });
  }
  ngOnInit(): void {
    this.PintarGrafico();

  }
}
