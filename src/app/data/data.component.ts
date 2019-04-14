import { Component, OnInit, Input } from '@angular/core';
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

  @Input() dataMap: Map<any, any>;
  categories: String[];

  constructor() {
    this.data = JSON.parse(this.jsonString);
    this.dataMap = new Map<String, Array<any>>();

    this.createCategories();
    this.createDataMap();
  }

  createCategories() {
    let catSet = new Set<String>();

    for (let element of this.data) {
      catSet.add(element.cat);
    }

    this.categories = Array.from(catSet);
  }

  createDataMap() {
    // Create new element of dataMap with the key being a category from the categories array
    for (let element of this.categories) {
      this.dataMap.set(element, new Array());
    }

    // Loop through each element in data array and push element to map element that corresponds to element's cat
    for (let element of this.data) {
      this.dataMap.get(element.cat).push(element);
    }
  }

  ngOnInit() {
    console.log(this.data);
    console.log(this.categories);
    console.log(this.dataMap);
  }

}
