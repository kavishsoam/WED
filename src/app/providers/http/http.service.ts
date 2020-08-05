import { Injectable } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from '../common/common.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  baseUrl = 'http://15.206.231.81:5000/api/v1/'  // Amazon Server URL

  constructor(public http: HttpClient,
    // private toastr: ToastrService,
    public spinner : NgxSpinnerService,
    public commonService : CommonService) {
    console.log('service run')
    console.log("SERVICEUSERID====>",localStorage.getItem('id'))
  }

  /******************************** VARIABLE DECLARATIONS ********************************************/  

  countryCode : any;
  mobileNo : any;  
  userId : any;


  /*********************************** POST METHOD *****************************************/

    post(endPoint, data,isHeader): Observable<any> {
      if(isHeader === 0){
        let httpOptions = {
          headers:  new HttpHeaders({
            'Content-Type': 'application/json',
          })
        }
        return this.http.post(this.baseUrl + endPoint, data, httpOptions)
      }else if(isHeader === 1){
        let httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'userId' : localStorage.getItem('userID') || '',
            'token' : localStorage.getItem('userToken') || '',
          })
        }
        return this.http.post(this.baseUrl + endPoint, data, httpOptions)
      }  
    }

    imageUpload(endPoint, data,isHeader) : Observable<any> {
      if(isHeader === 0){
        let httpOptions = {
          headers : new HttpHeaders({
            "accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          })
        }
        const body = new URLSearchParams();
        body.set('documentImage', data);
        return this.http.post(this.baseUrl + endPoint, body.toString(),httpOptions)
      }else if(isHeader === 1){
        let httpOptions = {
          headers : new HttpHeaders({
            "accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          })
        }
        const body = new URLSearchParams();
        body.set('documentImage', data);
        return this.http.post(this.baseUrl + endPoint, body.toString(),httpOptions)
      }  
    }


      /*********************************** PUT METHOD *****************************************/

      put(endPoint, data,isHeader): Observable<any> {
        if(isHeader === 0){
          let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
          }
          return this.http.put(this.baseUrl + endPoint, data, httpOptions)
        }else if(isHeader === 1){
          let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'userId' : localStorage.getItem('userID') || '',
              'token' : localStorage.getItem('userToken') || '',
            })
          }
          return this.http.put(this.baseUrl + endPoint, data, httpOptions)
        }  
      }
  
  /********************************* GET METHOD *******************************************/

    get(endPoint,isHeader): Observable<any> {
    if(isHeader === 0){
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
      return this.http.get(this.baseUrl + endPoint, httpOptions);
    }else if(isHeader === 1){
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'userId' : localStorage.getItem('userID') || '',
          'token' : localStorage.getItem('userToken') || '',
        })
      }
      return this.http.get(this.baseUrl + endPoint, httpOptions);
    }
    }

  }

/*********************************** INTERCEPTOR *****************************************/  
  
  @Injectable()
  export class httpModifierInterceptor implements HttpInterceptor {  
    constructor(public route: Router, public httpService: HttpService, public commonService : CommonService, public spinner : NgxSpinnerService) {}  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
      this.httpService.spinner.show(); 
   
      return next.handle(req).pipe(tap(res => {
        if (res instanceof HttpResponse) {
          if (res['body']['responseCode'] != 200) {
              this.httpService.spinner.hide(); //Handling Pending      
              this.commonService.showErrorToast(res['body']['responseMessage'] || 'Something went wrong.',true,'top-end');        
            }else{
              this.httpService.spinner.hide(); 
              // this.commonService.showSuccessToast('success',false,'top-end');
            }         
          }
      }, err => {
        if (err instanceof HttpErrorResponse) {
          console.log('---> err'+JSON.stringify(err['error']['responseMessage']));
          this.httpService.spinner.hide(); 
          this.commonService.showErrorToast(err['error']['responseMessage'] || 'Something went wrong.',false,'center');     
        }
      }));
    }  


    logoutFunc() {
      // let data = {
      //     "id" :   localStorage.getItem('id')
      // }
      // this.spinner.show();
      // this.globalService.post('user/logout', data,1).subscribe(res => {
      //     this.spinner.hide();
      //     if (res.responseCode == 200) {
      //         localStorage.clear();           
      //         this.route.navigateByUrl('landing');
      //     }   
      // }, err => {
      //     this.spinner.hide();
      //     console.log('Error', err);
      // }); 
      }
}

