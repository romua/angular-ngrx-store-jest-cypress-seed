import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyFeatureRoutingModule } from './lazy-feature-routing.module';
import { LazyFeatureHomeComponent } from './components/lazy-feature-home/lazy-feature-home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LazyFeatureEffects } from './store/effects/lazy-feature.effects';
import { reducer } from './store/reducers/lazy-feature.reducer';


@NgModule({
  declarations: [
    LazyFeatureHomeComponent
  ],
  imports: [
    CommonModule,
    LazyFeatureRoutingModule,
    StoreModule.forFeature('featureOne', reducer),
    EffectsModule.forFeature([LazyFeatureEffects])
  ]
})

export class LazyFeatureModule {
}
