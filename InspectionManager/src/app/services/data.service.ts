import { Finding } from './../models/findings/findings.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Car } from '../manager-view/findings-overview/findings/car.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  findings: Finding[];

  constructor() { }



  getAllFindings() {
    return {
      "findings":  [ {
      "id": 1,
      "severity" : 1,
      "category" : "StallStrip",
      "layer": "AddOn",
      "turbine": "KV-MGH-01",
      "blade": 711,
      "bladePosition": "A",
      "repaired": "No"

    },
    {
      "id": 2,
      "severity" : 2,
      "category" : "LPS",
      "layer": "LEP",
      "turbine": "KV-MGH-02",
      "blade": 711,
      "bladePosition": "B",
      "repaired": "Yes"
    },
      {
        "id": 3,
        "severity" : 3,
        "category" : "ScratchesAndGouges",
        "layer": "Filler",
        "turbine": "KV-MGH-03",
        "blade": 711,
        "bladePosition": "C",
        "repaired": "No"
    },
    {
      "id": 4,
      "severity" : 4,
      "category" : "Erosion",
      "layer": "AddOn",
      "turbine": "KV-MGH-04",
      "blade": 711,
      "bladePosition": "D",
      "repaired": "No"
    },
    {
      "id": 5,
      "severity" : 2,
      "category" : "StallStrip",
      "layer": "LEP",
      "turbine": "KV-MGH-01",
      "blade": 711,
      "bladePosition": "B",
      "repaired": "Yes"
    },
    {
      "id": 6,
      "severity" : 3,
      "category" : "ScratchesAndGouges",
      "layer": "AddOn",
      "turbine": "KV-MGH-05",
      "blade": 711,
      "bladePosition": "A",
      "repaired": "No"
    },
    {
      "id": 7,
      "severity" : 1,
      "category" : "Erosion",
      "layer": "LEP",
      "turbine": "KV-MGH-06",
      "blade": 711,
      "bladePosition": "D",
      "repaired": "Yes"
    },
    {
      "id": 8,
      "severity" : 2,
      "category" : "ScratchesAndGouges",
      "layer": "AddOn",
      "turbine": "KV-MGH-07",
      "blade": 711,
      "bladePosition": "C",
      "repaired": "No"
    },
      {
        "id": 9,
        "severity" : 3,
        "category" : "StallStrip",
        "layer": "LEP",
        "turbine": "KV-MGH-08",
        "blade": 711,
        "bladePosition": "A",
        "repaired": "Yes"
    },
    {
      "id": 10,
      "severity" : 4,
      "category" : "LPS",
      "layer": "AddOn",
      "turbine": "KV-MGH-09",
      "blade": 711,
      "bladePosition": "A",
      "repaired": "Yes"
    },
    {
      "id": 11,
      "severity" : 4,
      "category" : "Erosion",
      "layer": "Filler",
      "turbine": "KV-MGH-10",
      "blade": 711,
      "bladePosition": "B",
      "repaired": "No"
    },
    {
      "id": 12,
      "severity" : 2,
      "category" : "LPS",
      "layer": "LEP",
      "turbine": "KV-MGH-11",
      "blade": 711,
      "bladePosition": "B",
      "repaired": "No"
    },{
      "id": 13,
      "severity" : 1,
      "category" : "StallStrip",
      "layer": "AddOn",
      "turbine": "KV-MGH-12",
      "blade": 711,
      "bladePosition": "C",
      "repaired": "No"
    },
    {
      "id": 14,
      "severity" : 2,
      "category" : "ScratchesAndGouges",
      "layer": "LEP",
      "turbine": "KV-MGH-13",
      "blade": 711,
      "bladePosition": "D",
      "repaired": "Yes"
    },
      {
        "id": 15,
        "severity" : 3,
        "category" : "Erosion",
        "layer": "AddOn",
        "turbine": "KV-MGH-14",
        "blade": 711,
        "bladePosition": "D",
        "repaired": "No"
    },
    {
      "id": 16,
      "severity" : 3,
      "category" : "StallStrip",
      "layer": "Filler",
      "turbine": "KV-MGH-15",
      "blade": 711,
      "bladePosition": "A",
      "repaired": "Yes"
    },
    {
      "id": 17,
      "severity" : 1,
      "category" : "LPS",
      "layer": "LEP",
      "turbine": "KV-MGH-16",
      "blade": 711,
      "bladePosition": "A",
      "repaired": "No"
    },
    {
      "id": 18,
      "severity" : 4,
      "category" : "StallStrip",
      "layer": "LEP",
      "turbine": "KV-MGH-17",
      "blade": 711,
      "bladePosition": "B",
      "repaired": "Yes"
    },
    {
      "id": 19,
      "severity" : 3,
      "category" : "ScratchesAndGouges",
      "layer": "AddOn",
      "turbine": "KV-MGH-18",
      "blade": 711,
      "bladePosition": "B",
      "repaired": "No"
    },
    {
      "id": 20,
      "severity" : 2,
      "category" : "LPS",
      "layer": "AddOn",
      "turbine": "KV-MGH-19",
      "blade": 711,
      "bladePosition": "C",
      "repaired": "Yes"
    },
      {
        "id": 21,
        "severity" : 2,
        "category" : "ScratchesAndGouges",
        "layer": "Filler",
        "turbine": "KV-MGH-20",
        "blade": 711,
        "bladePosition": "D",
        "repaired": "Yes"
    },
    {
      "id": 22,
      "severity" : 3,
      "category" : "StallStrip",
      "layer": "LEP",
      "turbine": "KV-MGH-21",
      "blade": 711,
      "bladePosition": "D",
      "repaired": "Yes"
    },
    {
      "id": 23,
      "severity" : 2,
      "category" : "LPS",
      "layer": "AddOn",
      "turbine": "KV-MGH-22",
      "blade": 711,
      "bladePosition": "A",
      "repaired": "No"
    },
    {
      "id": 24,
      "severity" : 1,
      "category" : "ScratchesAndGouges",
      "layer": "LEP",
      "turbine": "KV-MGH-23",
      "blade": 711,
      "bladePosition": "A",
      "repaired": "No"
    }
     ]
  };
 }
}
