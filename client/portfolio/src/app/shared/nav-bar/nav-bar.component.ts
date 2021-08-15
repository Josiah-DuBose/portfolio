import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterStateService } from 'src/app/services/router-state.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  screenWidth: number;
  @ViewChild('navBar') navBar: ElementRef;

  constructor(
    public routerStateService: RouterStateService
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
}
