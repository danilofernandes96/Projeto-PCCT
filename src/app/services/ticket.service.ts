import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ticket } from "../model/ticket";

@Injectable({
    providedIn: 'root'
})
export class TicketService {
    url = 'http://localhost:4000/api/ticket';

    constructor(private http: HttpClient) { }

    buyTicket(ticket: Ticket): Observable<any> {
        return this.http.post(this.url, ticket)
    }

    getShipId(ship: string): Observable<any> {
        return this.http.get(this.url + ship);
    }

    getTicket(): Observable<any> {
        return this.http.get(this.url);
    }
}