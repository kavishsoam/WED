import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private previousUrl: string;
  private currentUrl: string;
  constructor(
    public spinner : NgxSpinnerService,
    public router : Router
    ) { }

  ngOnInit(){
    /** spinner starts on init */
    this.spinner.show();
  
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  // Swal.fire({
  //   title: 'Are you sure?',
  //   text: 'You will not be able to recover this imaginary file!',
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonText: 'Yes, delete it!',
  //   cancelButtonText: 'No, keep it'
  // }).then((result) => {
  //   if (result.value) {
  //     Swal.fire(
  //       'Deleted!',
  //       'Your imaginary file has been deleted.',
  //       'success'
  //     )
  //   // For more information about handling dismissals please visit
  //   // https://sweetalert2.github.io/#handling-dismissals
  //   } else if (result.dismiss === Swal.DismissReason.cancel) {
  //     Swal.fire(
  //       'Cancelled',
  //       'Your imaginary file is safe :)',
  //       'error'
  //     )
  //   }
  // });
}
