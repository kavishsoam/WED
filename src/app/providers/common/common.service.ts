import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  /*********************************** BEHAVIOUR SUBJECT *****************************************/  
  loginSub = new Subject();
  loginObs = this.loginSub.asObservable();  
  /*********************************** BEHAVIOUR SUBJECT *****************************************/  

  private previousUrl: string;
  private currentUrl: string;
  constructor(public router : Router, public spinner : NgxSpinnerService) {
    this.currentUrl = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        // console.log('previous URL ==>',this.previousUrl);
        // console.log('current URL ==>', this.currentUrl);
      };
    });
   }

      /********************************** GET PREVIOUS ROUTE ******************************************/

    public getPreviousUrl() {
      return this.previousUrl;
    }  


      /********************************** GET CURRENT ROUTE ******************************************/

    public getCurrentUrl() {
      return this.currentUrl;
    }

   /********************************** TOASTER SUCCESS ******************************************/
  
    showSuccessToast(msg,isToast,position) {
      Swal.fire({
        position: position,
        icon: 'success',
        toast : isToast,
        title: msg,
        showConfirmButton: false,
        timer: 2000
      })
    }

 /************************************ TOASTER ERROR ****************************************/
  
    showErrorToast(msg,isToast,position) {
      Swal.fire({
        position: position,
        icon: 'error',
        toast : isToast,
        title: msg,
        showConfirmButton: false,
        timer: 2000
      })
    }
  
 /*********************************** TOASTER WARNING *****************************************/  

    showWarningToast(msg,isToast,position) {
      Swal.fire({
        position: position,
        icon: 'warning',
        toast : isToast,
        title: msg,
        showConfirmButton: false,
        timer: 2000
      })
    }

  /*********************************** SHOW LOADER *****************************************/  

  showLoader() {
    this.spinner.show();
  }

    /*********************************** HIDE LOADER *****************************************/  

    hideLoader() {
      this.spinner.hide();
    }

  /************************************** RELOAD COMPONENT **************************************/  
  
    reload() {
      if (window.localStorage) {
        console.log('localstorage....')
        if (!localStorage.getItem('firstLoad')) {
          console.log('localstorage..ifffff..')
          localStorage['firstLoad'] = true;
          window.location.reload();
        } else
          localStorage.removeItem('firstLoad');
      }
    }  

      /********************************* SHARING DATA BTW UNRELATED COMPONENTS *******************************************/

      changeLoginSub(msg) {
        console.log("loggedInStatus",msg)
        this.loginSub.next(msg)
      }
  
  }

  

