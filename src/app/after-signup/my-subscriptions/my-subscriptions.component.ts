import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-subscriptions',
  templateUrl: './my-subscriptions.component.html',
  styleUrls: ['./my-subscriptions.component.scss']
})
export class MySubscriptionsComponent implements OnInit {

  constructor() { }

ngOnInit(): void {
window.scrollTo(0,0);
  }

}
