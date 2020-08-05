import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/providers/http/http.service';

@Component({
  selector: 'app-oath',
  templateUrl: './oath.component.html',
  styleUrls: ['./oath.component.scss']
})
export class OathComponent implements OnInit {

  constructor(public httpService : HttpService) { }
  termsOfUse : any;
ngOnInit(): void {
window.scrollTo(0,0);
    this.staticContentFunc();
  }

  staticContentFunc(){
    this.httpService.get('static/getStaticContent?Type=TERMS',0).subscribe(res =>{
      console.log('staticContent==>',res);
      this.termsOfUse = res.result[0].description
    },err => {
      console.log(err)
    })
  }
}