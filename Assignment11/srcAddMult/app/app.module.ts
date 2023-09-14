import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { MyMultPipe } from './my-mult.pipe';
import { MyAddPipe } from './my-add.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    MyMultPipe,
    MyAddPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
