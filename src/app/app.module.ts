import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from "./primeng.module";
import {HttpClientModule} from "@angular/common/http";
import {SidebarComponent} from "./common/components/sidebar/sidebar.component";
import {HeaderComponent} from "./common/components/header/header.component";
import {FooterComponent} from "./common/components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
