import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//components
import { AppComponent } from './app.component';
import { AddShipComponent } from './components/add-ship/add-ship.component';
import { ListShipsComponent } from './components/list-ships/list-ships.component';
import { BuyTicketComponent } from './components/buy-ticket/buy-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    AddShipComponent,
    ListShipsComponent,
    BuyTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
