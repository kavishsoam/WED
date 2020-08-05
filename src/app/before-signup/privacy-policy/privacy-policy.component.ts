import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/providers/http/http.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  privacyPolicy : any;
  constructor(public httpService :HttpService) { }

ngOnInit(): void {
window.scrollTo(0,0);
    this.staticContentFunc();
  }

  staticContentFunc(){
    this.httpService.get('static/getStaticContent?Type=PRIVACY',0).subscribe(res =>{
      console.log('staticContent==>',res);
      this.privacyPolicy = res.result[0].description
    },err => {
      console.log(err)
    })
  }


}
