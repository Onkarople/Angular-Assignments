import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DenoComponent } from './deno/deno.component';
import { ArthematicService } from './arthematic.service';

@NgModule({
  declarations: [
    AppComponent,
    DenoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArthematicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
