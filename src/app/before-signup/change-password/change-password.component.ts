import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/providers/http/http.service';
import { CommonService } from 'src/app/providers/common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  changeForm: FormGroup;
  check: boolean;
  numRegxForPattern: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i;
  showEye1: boolean = false;
  showEye2: boolean = false;
  showEye3: boolean = false;
  constructor(
    public httpService: HttpService,
    public commonService: CommonService,
    public router: Router
  ) {
    this.changeForm = new FormGroup(
      {
        newPassword: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      passwordMatchValidator
    );
    /** Function for password match and mismatch */
    function passwordMatchValidator(g: FormGroup) {
      let pass = g.get('newPassword').value;
      let confPass = g.get('confirmPassword').value;
      if (pass != confPass) {
        g.get('confirmPassword').setErrors({ mismatch: true });
      } else {
        g.get('confirmPassword').setErrors(null);
        return null;
      }
    }
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  /** Function for old password  and new password match and mismatch */
  passwordValidator() {
    this.check = true;
    if (this.changeForm.value.newPassword != '') {
      if (this.changeForm.value.newPassword == this.changeForm.value.password)
        this.changeForm.get('newPassword').setErrors({ mismatch: true });
      // else if(!this.numRegxForPattern.test(this.changeForm.value.newPassword)) {
      //     this.changeForm.get('newPassword').setErrors({ pattern: true });
      // }
      else {
        this.changeForm.get('newPassword').setErrors(null);
        this.check = false;
      }
    }
  }


  get newPassword(): any {
    return this.changeForm.get('newPassword');
  }
  get confirmPassword(): any {
    return this.changeForm.get('confirmPassword');
  }

  showHidePassword1() {
    if (this.showEye1 == false) {
      this.showEye1 = true;
    } else if (this.showEye1 == true) {
      this.showEye1 = false;
    }
  }

  /** to show and hide password */
  showHidePassword2() {
    if (this.showEye2 == false) {
      this.showEye2 = true;
    } else if (this.showEye2 == true) {
      this.showEye2 = false;
    }
  }

  /** to show and hide password */
  showHidePassword3() {
    if (this.showEye3 == false) {
      this.showEye3 = true;
    } else if (this.showEye3 == true) {
      this.showEye3 = false;
    }
  }

  changePasswordFunc() {
    let data = {
      userId : localStorage.getItem('userID'),
      password : this.changeForm.value.confirmPassword
    }
    this.httpService.post('user/changePassword',data,1).subscribe(res => {
      console.log('changePasswordSucc => ',res);
      if (res.responseCode == 200){
        this.commonService.showSuccessToast(res['responseMessage'],false,'center');   
        this.router.navigateByUrl('visitor/login');
      }
    },err => {
      console.log('changePasswordErr => ',err);
    })
  }
}
