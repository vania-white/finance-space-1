import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

enum ROUTER {
  ACCOUNTS = '/accounts',
  CATEGORIES = '/categories',
  OPERATIONS = '/operations',
  STATISTICS = '/statistics',
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items!: MenuItem[];
  activeItem!: MenuItem;

  constructor() { }

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

    this.activeItem = this.items
      .find(item => document.location.pathname === `/${item.label?.toLowerCase()}`) ?? this.items[0];
  }
}
