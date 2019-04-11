import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AgmMap} from '@agm/core';
import { google } from '@agm/core/services/google-maps-types';
import { Marker } from './marker';
// import fs from 'fs';

// declare let google: any;

@Component({
  selector: 'app-comp-agm-map',
  templateUrl: './comp-agm-map.component.html',
  styleUrls: ['./comp-agm-map.component.css']
})

export class CompAgmMapComponent implements OnInit {

  @ViewChild('AgmMap') agmMap: AgmMap;
  latitude = 33.980212;
  longitude = -84.004298;
  locationChosen = false;
  newMarker: any;
  newMarker2 = { id: null, lat: null, lng: null};
  marker: Marker[] = [{id: 1, lat: 33.980212, lng: -84.006298}, {id: 2, lat: 33.980212, lng: -84.007298},
    {id: 3, lat: 33.980212, lng: -84.005298}];
  // const csvtojsonV2 = require('csvtojson');
  // csvtojsonV2 = require('csvtojson/v2');

ngOnInit() {
    this.createMarkers();
    // this.createJSON();
  }


createMarkers(): void {
    this.newMarker = JSON.parse('{"id": 1, "lat": 33.979611, "lng": -84.004950}');
    this.newMarker2.lat = Number(this.newMarker.lat);
    this.newMarker2.lng = Number(this.newMarker.lng);
  }
  // async createJSON(): Promise<void> {
    // const csvToJson = require('convert-csv-to-json');
    // const fileInputName = 'myInputFile.csv';
    // const fileOutputName = 'myOutputFile.json';
    // csvToJson.generateJsonFileFromCsv('testdata.csv', 'testdata.json');
    // const csvFilePath = './testdata.csv';
    // const csv = require('csvtojson');
    // csv()
    //   .fromFile(csvFilePath)
    //   .then((jsonObj) => {
    //     console.log(jsonObj);
        /**
         * [
         *  {a:"1", b:"2", c:"3"},
         *  {a:"4", b:"5". c:"6"}
         * ]
         */
      // });

// Async / await usage
//     const jsonArray = await csv().fromFile(csvFilePath);
//   }
}
  // ngAfterViewInit() {
  //   //let bounds = new google.maps.LatLngBounds();
  // }


