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

  constructor(private findingService: FindingsService) { }



  ngOnInit() {

  this.findingService.getObservableFindings().subscribe( res => {
    this.findings = res;
  });

  }

}
