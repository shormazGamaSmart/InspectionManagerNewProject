import { FindingsService } from './../../../services/findings.service';
import { Component, OnInit } from '@angular/core';
import { Finding } from '../findings/findings.component.spec';
import { SortMeta } from 'primeng/components/common/sortmeta';
import { FilterMetadata } from 'primeng/components/common/filtermetadata';

@Component({
  selector: 'app-findings',
  templateUrl: './findings.component.html',
  styleUrls: ['./findings.component.scss']
})
export class FindingsComponent implements OnInit {
  datasource: Finding[];
  public findings: Finding[];
  public cols: any[];
  selectedFinding: Finding;
  totalRecords: number;
  loading: boolean;



  constructor(private findingService: FindingsService) { }



  ngOnInit() {

  this.findingService.getObservableFindings().subscribe( fin => {
    this.datasource = fin;
    this.totalRecords = this.datasource.length;
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
  this.loading = true;
  }



  loadFindingsLazy(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      if (this.datasource) {
          this.findings = this.datasource.slice(event.first, (event.first + event.rows));
          this.loading = false;
      }
  }, 1000);
}

}

export interface LazyLoadEvent {
  first?: number;
  rows?: number;
  sortField?: string;
  sortOrder?: number;
  multiSortMeta?: SortMeta[];
  filters?: {[s: string]: FilterMetadata;};
  globalFilter?: any;
}
