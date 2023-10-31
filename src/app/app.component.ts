import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-project-forms';
  formApproach = ''

  constructor(private router: Router){}


  ngOnInit(): void {
      this.router.events.pipe(
        filter( event => event instanceof NavigationEnd)
      ).subscribe(
        () => {
          if(this.router.url.includes('reactive')){
            this.formApproach = 'Reactive Driven Approach';
          } else{
            this.formApproach = 'Template Driven Approach'
          }
        }
      );
  }



}
