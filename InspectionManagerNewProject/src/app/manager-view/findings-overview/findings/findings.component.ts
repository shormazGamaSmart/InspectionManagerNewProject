import { FindingsService } from './../../../services/findings.service';
import { Component, OnInit } from '@angular/core';
import { Finding } from 'src/app/models/finding.model';

@Component({
  selector: 'app-findings',
  templateUrl: './findings.component.html',
  styleUrls: ['./findings.component.scss']
})
export class FindingsComponent implements OnInit {
  public findings: Finding[];
  public cols: any[];

  constructor(private findingService: FindingsService) { }



  ngOnInit() {

  this.findingService.getObservableFindings().subscribe( res => {
    this.findings = res;
  });

  this.cols = [
    { field: 'severity', header: 'Severity' },
    { field: 'category', header: 'Category' },
    { field: 'layer', header: 'Layer' },
    { field: 'turbine', header: 'Turbine' },
    { field: 'blade', header: 'Blade' },
    { field: 'position', header: 'Position' },
    { field: 'repaired', header: 'Repaired' }
];
  }

}
