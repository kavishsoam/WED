import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/providers/http/http.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactUs : any;
  constructor(public httpService : HttpService) { }

ngOnInit(): void {
window.scrollTo(0,0);
    this.staticContentFunc();
  }

  staticContentFunc(){
    this.httpService.get('static/getStaticContent?Type=CONTACT_US',0).subscribe(res =>{
      console.log('staticContent==>',res);
      this.contactUs = res.result[0];
    },err => {
      console.log(err)
    })
  }

}
