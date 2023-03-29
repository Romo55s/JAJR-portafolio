import { Component, HostBinding, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent implements OnInit{
  @HostBinding('class.pc') pcMode = false;
  
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void{
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape]).
    subscribe({
      next: (result: any) =>{
        for(let breakpoint of Object.keys(result.breakpoints)){
          if(result.breakpoints[breakpoint]){
            if(breakpoint === Breakpoints.HandsetPortrait){

            }
            if(breakpoint === Breakpoints.WebLandscape){

            }
          }
        }
      },
    });
  }
}
