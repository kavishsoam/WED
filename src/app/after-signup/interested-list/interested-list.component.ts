import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interested-list',
  templateUrl: './interested-list.component.html',
  styleUrls: ['./interested-list.component.scss']
})
export class InterestedListComponent implements OnInit {

  constructor() { }

ngOnInit(): void {
window.scrollTo(0,0);
  }

}
