import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {

  constructor() { }

ngOnInit(): void {
window.scrollTo(0,0);
  }

}
