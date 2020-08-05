import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../providers/http/http.service';
import { CommonService } from '../providers/common/common.service';
import Swal from 'sweetalert2';
declare var $ : any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  active: boolean;
  currUrl: any;
  ToggleTabUrl : any;
  url: any;
  loginType : any = 'mobile';
  emailLoginForm : FormGroup;
  isLoggedIn : any = 'false';
  isEmailVerified : boolean = true;
  constructor(public router : Router, public httpService : HttpService, public commonService : CommonService) {
    this.emailLoginForm = new FormGroup({     
      emailId: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/)]), 
      password : new FormControl('', [Validators.required]),
    });
    this.isLoggedIn = localStorage.getItem('isLoggedIn')
   }

ngOnInit(): void {
  window.scrollTo(0,0);

  // Open & Close Login Modal...
  $(".login_form1").on('click', function(e){
    console.log(localStorage.getItem('isLoggedIn'),typeof(localStorage.getItem('isLoggedIn')));
    if((localStorage.getItem('isLoggedIn') == 'true')){
      $('.collapse-2').toggleClass('newClass');
    }else{
      $('.login_form').toggleClass('newClass');  
    }           
  });

  $("#close-login_form").on('click', function(e){
    $('.login_form').toggleClass('newClass');
  });
  // Open & Close Login Modal...


  // Open & Close SideMenu...
  $(".toggle-button").on('click', function(e){
    console.log('buttonClicked...')
    $('.collapse-2').toggleClass('newClass');
  });

  $("#hide_collapes").on('click', function(e){
    console.log('buttonClicked1...')
    $('.collapse-2').toggleClass('newClass');
  });
  // Open & Close SideMenu...


  // Open & Close Search Modal...
  $("#partner_search").on('click', function(e){
      $('.secrch_partner').toggleClass('showOverlay');      
  });
    
  $("#partner_search1").on('click', function(e){
    $('.secrch_partner').toggleClass('showOverlay');      
  });  

  $("#hide_search_partner_form").on('click', function(e){
    $('.secrch_partner').toggleClass('showOverlay');      
  });
  // Open & Close Search Modal...

    this.router.events.subscribe( (event: Event) => {        
      if(event instanceof NavigationEnd) { 
          // console.log("events==>> ",event.url);
      this.url = event.url;          
      this.currUrl = event.url.split('/')[1];
      this.ToggleTabUrl = event.url.split('/')[2];   
      console.log("current url ==>> "+this.url);        
      // console.log("current url ==>> "+this.currUrl);
      // console.log("currentNew url ==>> "+this.ToggleTabUrl);      
        this.checkEmailVerification(this.url);
      }
    })      
  this.SharingDataAmongComponents();
}

checkEmailVerification(url) {
  const word = '?token=';
    if(url.includes(word)){
      console.log('matchFound')
      var token = this.url.split('?token=').reverse()[0];
      console.log('matchFoundToken ==>',token);
      if(token){
        this.verifyEmailFunc(token);
      }else{
        this.router.navigateByUrl('visitor/home');
      }
    }
}

verifyEmailFunc(tok) {
  this.httpService.get('user/email_verification?key='+ tok,1).subscribe(res => {
    console.log('emailVerification_Succ ==>',res);
    if(res['responseCode'] == 200) {
      // this.isEmailVerified = true;
      this.commonService.showSuccessToast(res['responseMessage'],false, 'center');
      this.router.navigateByUrl('visitor/login');      
    }else{
      // this.isEmailVerified = false;
      this.commonService.showErrorToast(res['responseMessage'],false, 'center');
    }    
  },err => {
    // this.isEmailVerified = false;
    console.log('emailVerification_Err ==>',err);
  })
}

SharingDataAmongComponents(){
  this.commonService.loginObs.subscribe((response:any) => {
      console.log('header Subscribe => '+ response);       
      // this.isLoggedIn = response;
  })         
}

login(){
  let data = {
    "email"        :  this.emailLoginForm.value.emailId,
    "password"     :  this.emailLoginForm.value.password 
    } 
  this.httpService.post('user/login', data,0).subscribe(res => {
    console.log('Login_Succ', res);
    if (res.responseCode == 200) {
      $('.login_form').toggleClass('newClass');
      localStorage.setItem('userID',res['result']._id);
      localStorage.setItem('userToken',res['result'].token);
      localStorage.setItem('isLoggedIn','true');
      this.commonService.changeLoginSub(true);  
      this.commonService.showSuccessToast(res['responseMessage'],false, 'center');
      this.emailLoginForm.reset();
      this.router.navigateByUrl('member/matches');
    }
  }, err => {
    console.log('Login_err', err);
  });  
}

  forgotPassword() {
    $('.login_form').toggleClass('newClass');
    this.router.navigateByUrl('visitor/forgotPassword');    
  }

  createAccount() {
    $('.login_form').toggleClass('newClass');
    this.router.navigateByUrl('visitor/registrationStep-1');
  }

  navigationFunc(url) {
    if(localStorage.getItem('isLoggedIn')){
      $('.collapse-2').toggleClass('newClass');
      this.router.navigateByUrl(url);
    }else{
      Swal.fire({
        title: 'Wedding App',
        text: 'Please login to access these features!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Okay',
        cancelButtonText: 'Leave'
      }).then((result) => {
        if (result.value) {
          // Swal.fire(
          //   'Thankyou!',
          //   '',
          //   'success'
          // )
          $('.collapse-2').toggleClass('newClass');
          this.router.navigateByUrl('visitor/login');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          $('.collapse-2').toggleClass('newClass');
          Swal.fire(
            'Thankyou!',
            '',
            'success'
          )
        }
      });
    }    
  }

  logoutFunc(){
    localStorage.clear();
    $('.collapse-2').toggleClass('newClass');
    this.commonService.changeLoginSub(false);  
    this.router.navigateByUrl('visitor/home');
  }
}
