import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Finding } from '../models/finding.model';
import 'rxjs/add/operator/map'

@Injectable()
export class FindingsService {
  private url: string = '../../assets/data/findings.json';
  constructor(private http: HttpClient) {}

  getFindings() {
    return this.http.get('../../assets/data/findings.json')
                    .toPromise()
                    .then(res => res as Finding[])
                    .then(data => data);
    }

    public getObservableFindings(): Observable<Finding[]> {
      return this.http.get<Finding[]>(this.url);
    }
  }
