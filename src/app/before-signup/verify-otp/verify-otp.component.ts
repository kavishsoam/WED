import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/providers/http/http.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from 'src/app/providers/common/common.service';
declare var $ : any;

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOTPComponent implements OnInit {
  getUserClass: any;
  checkPreviousURL : string;
  otp = { one: "", two: "", three: "", four: "" };
  counter  = 30;
  constructor(public httpService : HttpService,public router: Router,public spinner : NgxSpinnerService, public commonService : CommonService) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.checkPreviousURL = this.commonService.getPreviousUrl();
    console.log('checkPreviousURL ==>',this.checkPreviousURL.split('/')[2]);
      this.getUserClass = localStorage.getItem('AddClass')
      if(this.getUserClass == '2'){
          $("body").removeClass("pharmacy-section");
      }else if(this.getUserClass == '3'){
          $("body").addClass("pharmacy-section");
      }      
      this.startTimer();
  }

  startTimer() {
    this.counter = 30;
    let intervalId = setInterval(() => {
        this.counter = this.counter - 1;
        console.log(this.counter)
        if(this.counter === 0){
            clearInterval(intervalId);     } 
    }, 1000)
  }

  /** Auto focus functionality */
  onKey(event,value, type) {
      console.log(event,value,type)
      if(event.code != 'Backspace'){
          if (type == 1) {
              if (value != "") {
                  $('#otp2').focus();
              }
          } else if (type == 2) {
              if (value != "") {
                  $('#otp3').focus();
              }
          } else if (type == 3) {
              if (value != "") {
                  $('#otp4').focus();
              }
          } else if (type == 4) {
              if (value != "") {
                  $('#otp4').focus();                   
              }               
          } 
      }else if(event.code == 'Backspace' || event.code == 'Delete'){
          console.log('BackSpace_Called...')
        if (type == 1) {
                $('#otp1').focus();
        } else if (type == 2) {
                $('#otp1').focus();
        } else if (type == 3) {
                $('#otp2').focus();
        } else if (type == 4) {
                $('#otp3').focus();  
        } 
      }else {
        //   this.otp.one = "";
        //   this.otp.two = "";
        //   this.otp.three = "";
        //   this.otp.four = "";
        //   $('#otp1').focus();
      }  
}

  /**Function to verify OTP */
  verifyOTP() {
      let data = {
          "otp"           :   this.otp.one + this.otp.two + this.otp.three + this.otp.four,
          "userId"        :   localStorage.getItem('userID'),
      }
      this.httpService.post('user/verifyOtp', data,1).subscribe(res => {
          console.log('verify_OTP ==>',res);
          if (res.responseCode == 200){
              if(this.checkPreviousURL.split('/')[2] == 'forgotPassword'){
                localStorage.setItem('userID',res['result']._id);
                localStorage.setItem('userToken',res['result'].token);
                this.commonService.showSuccessToast(res['responseMessage'],false,'center');    
                this.router.navigateByUrl('visitor/changePassword');
              }else if(this.checkPreviousURL.split('/')[2] == 'registrationStep-1'){
                localStorage.setItem('userID',res['result']._id);
                localStorage.setItem('userToken',res['result'].token);
                this.commonService.showSuccessToast(res['responseMessage'],false,'center');   
                this.router.navigateByUrl('visitor/registrationStep-2');
              }else {
                  console.log('Route_URL_ISSUE');
              }          
          }      
      }, err => {
          console.log('verifyOTP_Err ==>', err);
      });      
  }

  /**Function to resend OTP */
  resendOTP() {
      let data = {
          "userId"      :   localStorage.getItem('userID')
      }
      this.spinner.show();
      this.httpService.post('user/resendOtp', data,0).subscribe(res => {
          this.spinner.hide();
          if (res.responseCode == 200)   {
              this.commonService.showSuccessToast(res['responseMessage'],false,'center');
              this.startTimer();
          }     
      }, err => {
          console.log('Error', err);
      });            
  }


}
