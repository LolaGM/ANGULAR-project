import { Component, OnInit } from '@angular/core';
import { LocalDataService } from 'src/app/services/local-data.service';


@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.css']
})
export class TablaCRUDComponent implements OnInit {
  registers: any[] = [];

  constructor(private localDataService: LocalDataService) { }

  ngOnInit() {
    this.registers = this.localDataService.getRegisters();
  }

  addRegister(registro: any) {
    this.localDataService.addRegister(registro);
    this.registers = this.localDataService.getRegisters();
  }

  editRegister(index: number, registro: any) {
    this.localDataService.editRegister(index, registro);
  }

  deleteRegister(index: number) {
    this.localDataService.deleteRegister(index);
    this.registers = this.localDataService.getRegisters();
  }
}
