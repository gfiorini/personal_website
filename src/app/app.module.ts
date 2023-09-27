import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule, MDBRootModule} from "ng-uikit-pro-standard";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBRootModule,
        AccordionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
