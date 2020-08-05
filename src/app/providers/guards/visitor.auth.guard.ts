import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()

export class visitorAuthGuard implements CanActivate{
    constructor(private router: Router) {}

    canActivate(next, state): boolean {
        return true;
        // if(localStorage.getItem('loginStatus') != null) {
        //     if(localStorage.getItem('loginStatus') == '2') { 
        //         return true;
        //     } else {
        //         this.router.navigate(['/pharmacy'])
        //         return false
        //     }
        // } else {
        //     this.router.navigate(['/landing'])
        //     return false
        // }
    }

}