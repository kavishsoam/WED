import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rejection-list',
  templateUrl: './rejection-list.component.html',
  styleUrls: ['./rejection-list.component.scss']
})
export class RejectionListComponent implements OnInit {

  constructor() { }

ngOnInit(): void {
window.scrollTo(0,0);
  }

}
