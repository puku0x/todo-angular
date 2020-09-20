import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { TodoStoreModule } from './todo';

@NgModule({
  imports: [
    StoreModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    TodoStoreModule,
  ],
})
export class AppStoreModule {}
