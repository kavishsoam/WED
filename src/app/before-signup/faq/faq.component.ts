import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/providers/http/http.service';
declare var $ : any;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
faq : any = [];
  constructor(public httpService : HttpService) { }

ngOnInit(): void {
window.scrollTo(0,0);
    $("#Trigger").click(function () {
      if ($("#Slider").hasClass("slideup"))
          $("#Slider").removeClass("slideup").addClass("slidedown");
      else
          $("#Slider").removeClass("slidedown").addClass("slideup");
  });
    this.staticContentFunc();
  }

  showHideFunc(data, i) {
     this.faq.forEach((element, index) => {
       if(index == i){
         element.showAnswer = !element.showAnswer;
       }
     });

  }
    
  staticContentFunc(){
    this.httpService.get('static/getStaticContent?Type=FAQ',0).subscribe(res =>{
      console.log('staticContent==>',res);
      this.faq = res.result[0].FAQ;
      this.faq.forEach(element => {
        element.showAnswer = false;
      });
    },err => {
      console.log(err)
    })
  }

}
