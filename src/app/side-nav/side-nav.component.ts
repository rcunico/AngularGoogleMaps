import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataComponent } from '../data/data.component';
import { AgmMap } from '@agm/core';
import { CompAgmMapComponent } from '../comp-agm-map/comp-agm-map.component';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  @ViewChild(CompAgmMapComponent) agmMap: CompAgmMapComponent;
  @ViewChild('drawer') drawer: MatSidenav

  isVisible = true;
  dataPoint: Object;
  data: DataComponent;
  dataList: any[];
  dataCategories: any[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.dataPoint = {};
    this.data = new DataComponent();
    this.dataList = this.data.data;
    this.dataCategories = this.data.categories;
    console.log(this.dataList);
  }

  toggleVisibility(category: String) {
    console.log(category);
    this.agmMap.toggleVisibility(category);
  }

  updateDetails(dataPointData: {dataPointDetail: Object}) {
    this.dataPoint = dataPointData.dataPointDetail;
    this.isVisible = false;
    Object.entries(dataPointData.dataPointDetail).forEach(entry => {
      console.log(entry[0] + ": " + entry[1]);
    })

    // Opens sidenav aka drawer on info window click
    if (!this.drawer.opened) {
      this.drawer.toggle();
    }
  }

  isUrl(value : any) {
    let valueString: String = value += '';
    if (valueString.substring(0,4) == 'http') {
      return true;
    }
    else {
      return false;
    }
  }
}
