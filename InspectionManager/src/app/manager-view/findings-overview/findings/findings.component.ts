import { Finding } from './../../../models/findings/findings.model';
import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { Car } from './car.model';
import {TableModule} from 'primeng/table';
import 'rxjs/add/operator';
import { runInThisContext } from 'vm';


@Component({
  selector: 'app-findings',
  templateUrl: './findings.component.html',
  styleUrls: ['./findings.component.scss']
})
export class FindingsComponent implements OnInit {
  findings: Finding[];
  findingsLayer: any;
  sales: any[];

  displayedColumns: string[] = ['severity', 'category', 'turbine', 'blade'];
  dataSource: any[];

  constructor(private findingsService: DataService) { }

    getFindings() {
      return this.findingsService.getAllFindings();
    }

  ngOnInit() {
    this.getFindings();
    console.log(this.findings);

    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];

    const FINDINGS_DATA: any[] = [
      {severity: 1, category: 'Hydrogen', turbine: 1.0079, blade: 'H'},
      {severity: 2, category: 'Hydrogen', turbine: 1.0079, blade: 'H'},
      {severity: 3, category: 'Hydrogen', turbine: 1.0079, blade: 'H'},
      {severity: 4, category: 'Hydrogen', turbine: 1.0079, blade: 'H'},
      {severity: 5, category: 'Hydrogen', turbine: 1.0079, blade: 'H'},
      {severity: 6, category: 'Hydrogen', turbine: 1.0079, blade: 'H'},
,
    ];

    this.dataSource = FINDINGS_DATA;

}




}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
