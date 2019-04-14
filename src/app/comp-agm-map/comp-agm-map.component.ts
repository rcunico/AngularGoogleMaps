import { Component, OnInit, ViewChild, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { AgmMap} from '@agm/core';
import { google } from '@agm/core/services/google-maps-types';

// declare let google: any;

@Component({
  selector: 'app-comp-agm-map',
  templateUrl: './comp-agm-map.component.html',
  styleUrls: ['./comp-agm-map.component.css']
})
export class CompAgmMapComponent implements OnInit {

  @Output() dataPointDetailsClicked = new EventEmitter<{dataPointDetail: Object}>();
  @Input() mapDataList: any[];
  @Input() categories: String[];
  markerList: CustomMarker[];
  markerMap: Map<any, any>;
  
  lat: number = 33.979984;
  lng: number = -84.0066296;
  zoom: number = 12;
  locationChosen = false;

  addMarker(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }

  constructor() {
    this.markerList = new Array();
    this.markerMap = new Map<String, Array<any>>();
  }

  ngOnInit() {
    console.log(this.mapDataList)

    this.mapDataList.forEach((element) => {
      this.markerList.push(new CustomMarker(element));
    })
    console.log(this.markerList);

    this.createMarkerMap();
    console.log(this.markerMap);
  }

  createMarkerMap() {
    for (let element of this.categories) {
      this.markerMap.set(element, new Array<CustomMarker>());
    }

    for (let element of this.markerList) {
      this.markerMap.get(element.category).push(element);
    }
  }

  toggleVisibility(category: String) {
    // this.markerList.forEach((element) => {
    //   (element.category === category ? element.visible = !element.visible : element.visible = element.visible)
    // })

    for (let element of this.markerMap.get(category)) {
      element.visible = !element.visible;
      console.log(element.data);
    }
  }

  clickEvent(dataPoint: Object) {
    this.dataPointDetailsClicked.emit({
      dataPointDetail: dataPoint
    });
  }

}

class CustomMarker {
  category: String;
  lat: number;
  lng: number;
  visible: boolean;
  data: Object;

  constructor(Object) {
    this.category = Object.cat;
    this.lat = Object.lat;
    this.lng = Object.lng;
    this.visible = true;
    this.data = Object;
  }
}
