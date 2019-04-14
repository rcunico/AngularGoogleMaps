import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataComponent } from '../data/data.component';
import { AgmMap } from '@agm/core';
import { CompAgmMapComponent } from '../comp-agm-map/comp-agm-map.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  @ViewChild(CompAgmMapComponent) agmMap: CompAgmMapComponent;

  checked = false;

  data: DataComponent;
  dataList: any[];
  dataCategories: any[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.data = new DataComponent();
    this.dataList = this.data.data;
    this.dataCategories = this.data.categories;
    console.log(this.dataList);
  }

  toggleVisibility(category: String) {
    console.log(category);
    this.agmMap.toggleVisibility(category);
  }
}
