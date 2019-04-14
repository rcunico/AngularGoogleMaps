import { Component, OnInit } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/animations/browser/src/util';
import { DebugContext } from '@angular/core/src/view';
import { ArrayDataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data: any[];
  jsonString = '[{"cat": "place", "name": "test1"},{"cat": "person", "name": "test2"},{"cat": "place", "name": "test3"},{"cat": "person", "name": "test4"}]';

  dataMap: Map<any, any>;
  catSet: Set<String>;
  dataList: Array<any>;

  constructor() {
    this.data = JSON.parse(this.jsonString);

    // this.dataMap = new Map<String, String>(
    //   this.data.map(x => [x.cat, x.name] as [String, String])
    // );

    this.catSet = new Set<String>();
    this.dataMap = new Map<String, Array<any>>();
    this.dataList = new Array<Array<Object>>();

    this.createCatSet();
    this.createDataList();
    // this.createDataMap();
  }

  createCatSet() {
    for (let element of this.data) {
      this.catSet.add(element.cat);
    }
  }

  createDataList() {
    for (let element of Array.from(this.catSet.values())) {
      this.dataList.push(new Array<Object>());
    }

    this.dataMap.set("person", new Array());
    this.dataMap.set("place", new Array());


    for (let element of this.data) {
      this.dataMap.get(element.cat).push(element);
      console.log(this.dataMap.get(element.cat));
    }
  }

  findIndex(category) {
    let catArray = Array.from(this.catSet.values());
    return catArray.indexOf(category);
  }

  createDataMap() {
    
  }

  ngOnInit() {
    console.log(this.data);
    console.log(this.catSet);
    console.log(this.dataList);
    console.log(this.dataMap);

  }

}
