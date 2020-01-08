import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TapComponentComponent } from './tap-component/tap-component.component';
import { HttpClientModule } from '@angular/common/http';
import { TakeComponenetComponent } from './take-componenet/take-componenet.component';
import { MergeMapComponentComponent } from './merge-map-component/merge-map-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TapComponentComponent,
    TakeComponenetComponent,
    MergeMapComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
