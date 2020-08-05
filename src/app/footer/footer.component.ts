import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isShow: boolean = true;
  topPosToStartShowing = 100; 
  constructor() { }

ngOnInit(): void {
window.scrollTo(0,0);
    $(".arrow_up").on('click', function(e){
      console.log('buttonClicked...');
      $('.arrow_up').toggleClass('moveToTop');
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    });


    // if (document.querySelector("#partner_search")) {
    //   document
    //     .querySelector("#partner_search")
    //     .addEventListener("click", function (event) {
    //       document.getElementsByClassName("secrch_partner")[0].style.top = "0";
    //       if (
    //         (document.getElementsByClassName("secrch_partner")[0].style.top = "0")
    //       ) {
    //         document.getElementById("mobile-footer-links").style.zIndex = "999";
    //         document
    //           .querySelector("#hide_search_partner_form")
    //           .addEventListener("click", function () {
    //             document.getElementsByClassName("secrch_partner")[0].style.top =
    //               "-100%";
    //           });
    //       }
    //       event.preventDefault();
    //     });
    // }
  }
}
