import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AgmMap} from '@agm/core';
import { google } from '@agm/core/services/google-maps-types';

// declare let google: any;

@Component({
  selector: 'app-comp-agm-map',
  templateUrl: './comp-agm-map.component.html',
  styleUrls: ['./comp-agm-map.component.css']
})
export class CompAgmMapComponent implements OnInit {

  @ViewChild('AgmMap') agmMap: AgmMap;
  lat: number = 51.678418;
  lng: number = 7.809007;
  locationChosen = false;

  addMarker(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //let bounds = new google.maps.LatLngBounds();
  }

}
