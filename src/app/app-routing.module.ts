import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreRouterConnectingModule } from '@ngrx/router-store';

const routes: Routes = [
  {
    path: 'lazy-feature',
    loadChildren: './lazy-feature/lazy-feature.module#LazyFeatureModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), StoreRouterConnectingModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
