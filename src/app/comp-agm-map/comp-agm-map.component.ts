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
  infoWindowVisible: boolean;
  redMarker: any;
  
  lat: number = 33.979984;
  lng: number = -84.0066296;
  zoom: number = 12;

  constructor() {
    this.markerList = new Array();
    this.markerMap = new Map<String, Array<any>>();
  }

  ngOnInit() {
    this.infoWindowVisible = false;

    this.redMarker = {
      url: 'http://www.clker.com/cliparts/Q/l/D/8/k/m/red-circle-icon-hi.png',
      scaledSize: {
        width: 20,
        height: 20
      }
    }

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
    for (let element of this.markerMap.get(category)) {
      element.visible = !element.visible;
      console.log(element.data);
    }
    // if (this.infoWindowVisible == true) this.infoWindowVisible = false;
    // console.log(this.infoWindowVisible);

  }

  clickEvent(dataPoint: Object) {
    this.dataPointDetailsClicked.emit({
      dataPointDetail: dataPoint
    });
  }

  // test() {
  //   this.infoWindowVisible = true;
  //   console.log(this.infoWindowVisible);
  // }

}

class CustomMarker {
  category: String;
  lat: number;
  lng: number;
  visible: boolean;
  data: Object;

  constructor(Object) {
    this.category = Object.Category;
    this.lat = Object.Latitude;
    this.lng = Object.Longitude;
    this.visible = true;
    this.data = Object;
  }
}
