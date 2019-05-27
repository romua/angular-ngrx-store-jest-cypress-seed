import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyFeatureHomeComponent } from './components/lazy-feature-home/lazy-feature-home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LazyFeatureHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyFeatureRoutingModule { }
