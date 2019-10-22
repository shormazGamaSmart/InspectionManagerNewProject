import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Finding } from '../models/finding.model';
import 'rxjs/add/operator/map'

@Injectable()
export class FindingsService {
  private url: string = '../../assets/data/findings.json';
  constructor(private http: HttpClient) {}

    public getObservableFindings(): Observable<Finding[]> {
      return this.http.get<Finding[]>(this.url);
    }

    // public getPromiseFindingsPromise(): Promise<Finding[]> {
    //   return this.http.get<Finding[]>(this.url).toPromise();
    // }

  }
