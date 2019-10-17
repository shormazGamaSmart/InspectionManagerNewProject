import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Finding } from '../models/finding.model';
import 'rxjs/add/operator/map'

@Injectable()
export class FindingsService {
  url = '../findings.json';
  findings = [];
  constructor(private http: HttpClient){}

  getFindings() {
    return this.http.get(this.url).toPromise().then(data => {

        for (let key in data) {
        if (data.hasOwnProperty(key)) {
        this.findings.push(data[key]);
        }
        }
    });
  }


}
