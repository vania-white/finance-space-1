import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {countSelector, updatedAtSelector} from "../../common/reducers/counter/counter.selectors";
import {clear, decrease, increase} from "../../common/reducers/counter/counter.actions";

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
