import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlapComponent } from './flap/flap.component';
import { SplitFlapDisplayComponent } from './split-flap-display/split-flap-display.component';
import { SplitFlapRowComponent } from './split-flap-row/split-flap-row.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FlapComponent,
    SplitFlapDisplayComponent,
    SplitFlapRowComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
