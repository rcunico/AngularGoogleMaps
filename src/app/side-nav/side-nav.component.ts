import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  checked = false;

  data: DataComponent;
  dataList: any[];
  dataMap: Map<any, any>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.data = new DataComponent();
    this.dataList = this.data.data;
    this.dataMap = this.data.dataMap;
    console.log(this.dataList);
  }

  someEvent(category) {
    console.log(this.dataMap.get(category));
  }

  toggleVisibility(index) {
    
  }
}
