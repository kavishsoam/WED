import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-boxes',
  templateUrl: './picture-boxes.component.html',
  styleUrls: ['./picture-boxes.component.scss']
})
export class PictureBoxesComponent implements OnInit {

  constructor() { }

ngOnInit(): void {
window.scrollTo(0,0);
  }

}
