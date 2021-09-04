import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddShipComponent } from './components/add-ship/add-ship.component';
import { ListShipsComponent } from './components/list-ships/list-ships.component';

@NgModule({
  declarations: [
    AppComponent,
    AddShipComponent,
    ListShipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
