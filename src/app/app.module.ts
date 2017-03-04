import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';

import { TraitsPage } from '../pages/traits/traits';
import { GenderSelectionPage } from '../pages/gender-selection/gender-selection';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    GenderSelectionPage,
    TraitsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    GenderSelectionPage,
    TraitsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
