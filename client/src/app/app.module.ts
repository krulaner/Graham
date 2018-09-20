import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpService} from "./http.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowAuthorComponent } from './show-author/show-author.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowAuthorComponent,
    NewAuthorComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
