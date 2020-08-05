import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public router : Router, public routes: ActivatedRoute) {
  //   this.router.events.subscribe( (event: Event) => {        
  //     if(event instanceof NavigationEnd) { 
  //         // console.log("events==>> ",event.url);
  //     this.url = event.url;          
  //     this.currUrl = event.url.split('/')[1];
  //     this.ToggleTabUrl = event.url.split('/')[2];   
  //     console.log("current url ==>> "+this.url)        
  //     console.log("current url ==>> "+this.currUrl)
  //     }
  // })  
   }

  ngOnInit(): void {
    this.routes.params.subscribe(params => {
      console.log('params111=>' , params)
      console.log('params222=>' + params[`user`])
      // this.tab = params[`id`]
    });

    let params: any = this.routes.snapshot.params;
    console.log(params.user);
   
  }

}
