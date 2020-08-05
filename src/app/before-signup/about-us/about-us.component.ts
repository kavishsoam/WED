import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/providers/http/http.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  aboutUsContent: any;
  constructor(public httpService : HttpService) { }

ngOnInit(): void {
window.scrollTo(0,0);
    window.scrollTo(0,0);
    this.staticContentFunc();
  }

  staticContentFunc(){
    this.httpService.get('static/getStaticContent?Type=ABOUT_US',0).subscribe(res =>{
      console.log('staticContent==>',res);
      this.aboutUsContent = res.result[0].description
    },err => {
      console.log(err);
      // this.httpService.showError();
    })
  }

}
