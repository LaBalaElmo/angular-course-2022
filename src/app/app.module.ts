import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutosComponent } from './autos/autos.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { ShowIDDirective } from './show-id.directive';
import { PricePipe } from './price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AutosComponent,
    ShowIDDirective,
    PricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
