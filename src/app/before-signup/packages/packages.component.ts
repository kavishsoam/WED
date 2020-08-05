import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/providers/http/http.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  packagesArr : any = [];
  constructor(public httpService : HttpService) { }

ngOnInit(): void {
    window.scrollTo(0,0);
    this.getPackages();
  }

  getPackages() {
    this.httpService.get('static/allPackages',0).subscribe(res => {
      console.log('packageList_Succ ==> ',res);
      if(res['responseCode'] == 200) {
        this.packagesArr = res['result'];
        this.packagesArr.forEach(element => {
          element.perMonthPrice = Math.ceil(element.packagePrice / element.packageTime) ? Math.ceil(element.packagePrice / element.packageTime) : 0;
        });
      }
    },err => {
      console.log('packageList_Err ==>',err);
    })
  }
}
