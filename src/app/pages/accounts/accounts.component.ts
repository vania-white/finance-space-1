import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {clear, countSelector, decrease, increase, updatedAtSelector} from "../../common/reducers/counter";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  public count$ = this.store.select(countSelector)
  public cannotDecrease$ = this.count$.pipe(map(count => count <= 0))
  public updatedAt$ = this.store.select(updatedAtSelector);

  constructor(private store: Store) { }

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }

  clear(): void {
    this.store.dispatch(clear());
  }
}
