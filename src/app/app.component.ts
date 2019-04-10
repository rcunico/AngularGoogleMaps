import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'My first AGM project';

  ngOnInit() {
  }

  toggleDiv() {
    var x = document.getElementById('filterDiv');
    if (x.style.width === '20%') {
      x.style.width = '0%';
    } else {
      x.style.width = '20%';
    }
    var y = document.getElementById('hideShowDiv');
    if (x.style.marginLeft === '0px') {
      x.style.marginLeft = '30px';
    } else {
      x.style.marginLeft = '0px';
    }

  }
}
