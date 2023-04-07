import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RiquadroComponent } from './riquadro/riquadro.component';
import { SwitchpageComponent } from './switchpage/switchpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RiquadroComponent,
    SwitchpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
