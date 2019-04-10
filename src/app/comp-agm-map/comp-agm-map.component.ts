import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AgmMap} from '@agm/core';
import { google } from '@agm/core/services/google-maps-types';
import { Marker } from './marker';

// declare let google: any;

@Component({
  selector: 'app-comp-agm-map',
  templateUrl: './comp-agm-map.component.html',
  styleUrls: ['./comp-agm-map.component.css']
})

export class CompAgmMapComponent implements OnInit {

  @ViewChild('AgmMap') agmMap: AgmMap;
  latitude: number = 33.980212;
  longitude: number = -84.004298;
  locationChosen = false;
  newMarker: any;
  newMarker2 = { id: null, lat: null, lng: null};
  marker: Marker[] = [{id: 1, lat: 33.980212, lng: -84.006298}, {id: 2, lat: 33.980212, lng: -84.007298},
    {id: 3, lat: 33.980212, lng: -84.005298}];
  // addMarker(event) {
  //   this.lat = event.coords.lat;
  //   this.lng = event.coords.lng;
  //   this.locationChosen = true;
  // }

  ngOnInit() {
    this.createMarkers();
  }
  createMarkers(): void {
    this.newMarker = JSON.parse('{"id": 1, "lat": 33.979611, "lng": -84.004950}');
    this.newMarker2.lat = Number(this.newMarker.lat);
    this.newMarker2.lng = Number(this.newMarker.lng);
  }
}
  // ngAfterViewInit() {
  //   //let bounds = new google.maps.LatLngBounds();
  // }


