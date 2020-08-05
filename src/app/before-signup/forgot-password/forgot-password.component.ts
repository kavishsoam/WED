import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/providers/http/http.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm : FormGroup;
  constructor(public httpService : HttpService, public commonService : CommonService, public router : Router) { 
    this.forgotPasswordForm = new FormGroup({        
      emailId: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]),
    });
  }

ngOnInit(): void {
window.scrollTo(0,0);
  }

  forgotPasswordFunc() {
    let data = {
      email : this.forgotPasswordForm.value.emailId
    }
    this.httpService.post('user/forgotPassword', data,0).subscribe(res => {
      console.log('forgotPassword_Resp ==> ', res);
      if (res.responseCode == 200) {
        localStorage.setItem('userID',res['result']);
        this.commonService.showSuccessToast(res.responseMessage,false,'center');     
        this.router.navigateByUrl('visitor/verifyOTP')   
      }
    }, err => {
      console.log('forgotPassword_Err', err);
    }); 
  }

}
