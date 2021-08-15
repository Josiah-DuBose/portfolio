import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { get } from 'lodash';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterStateService {
  CurrentTab = 'home';
  queryParams = new BehaviorSubject(null);

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.CurrentTab = (get(event, 'url')).match(/\/(.*)/)[1];
        this.queryParams.next(this.route.queryParams);
      }
    });

    this.route.queryParams.subscribe(params => this.queryParams.next(params));
  }

  get currentTab(): string {
    return this.CurrentTab;
  }

  set currentTab(val: string) {
    this.CurrentTab = val;
  }
}
