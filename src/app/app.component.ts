import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

enum ROUTER {
  ACCOUNTS = '/accounts',
  CATEGORIES = '/categories',
  OPERATIONS = '/operations',
  STATISTICS = '/statistics',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Accounts',
        icon: 'pi pi-fw pi-credit-card',
        routerLink: ROUTER.ACCOUNTS,
      },
      {
        label: 'Categories',
        icon: 'pi pi-fw pi-chart-pie',
        routerLink: ROUTER.CATEGORIES,
      },
      {
        label: 'Operations',
        icon: 'pi pi-fw pi-book',
        routerLink: ROUTER.OPERATIONS,
      },
      {
        label: 'Statistics',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: ROUTER.STATISTICS,
      },
    ];

    if (document.location.pathname === ROUTER.ACCOUNTS) this.activeItem = this.items[0];
    if (document.location.pathname === ROUTER.CATEGORIES) this.activeItem = this.items[1];
    if (document.location.pathname === ROUTER.OPERATIONS) this.activeItem = this.items[2];
    if (document.location.pathname === ROUTER.STATISTICS) this.activeItem = this.items[3];
  }
}
