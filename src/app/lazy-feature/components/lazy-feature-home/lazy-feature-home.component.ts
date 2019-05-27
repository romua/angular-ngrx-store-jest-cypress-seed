import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsers, getError, State } from '../../store/reducers';
import { LoadData } from '../../store/actions/lazy-feature.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lazy-feature-home',
  templateUrl: './lazy-feature-home.component.html',
  styleUrls: ['./lazy-feature-home.component.css']
})
export class LazyFeatureHomeComponent implements OnInit {

  public users$: Observable<any[]>;
  public error$: Observable<any>;

  constructor(private store: Store<State>) {
    this.users$ = store.select(getUsers);
    this.error$ = store.select(getError);
  }

  ngOnInit() {
    this.store.dispatch(new LoadData(11));
  }

}
