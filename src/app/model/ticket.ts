export class Ticket {
    _id?: number;
    name_passenger?: string;
    cpf?: number;
    card_number?: number;
    ship?: string;
  
    constructor(name_passenger: string, cpf: number, card_number: number, ship: string ) {
        this.name_passenger = name_passenger;
        this.cpf = cpf;
        this.card_number = card_number;
        this.ship = ship;
    }
  }
  