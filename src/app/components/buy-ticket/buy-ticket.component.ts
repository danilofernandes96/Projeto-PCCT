import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from 'src/app/model/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {
  ticketForm: FormGroup;
  id: string | null;
  listTickets: Ticket[] = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _ticketService: TicketService,
              private aRouter: ActivatedRoute) {
    this.ticketForm = this.fb.group({
      namePassenger: ['', Validators.required],
      cpf: ['', Validators.required],
      cardNumber: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  printSimplePdf() {
    this._ticketService.getTicket().subscribe(data => {
      // console.log(data[0].ship.name);
      const doc = new jsPDF();
      doc.text("Minha passagem", 10, 10);
      doc.text(`Navio: ${data[2].ship.name}`, 10, 20);
      doc.save("ticket.pdf");
    }, error => {
      console.log(error);
    })

  }

  buyTicket() {
    if(this.id !== null) {
      const TICKET: Ticket = {
        name_passenger: this.ticketForm.get('namePassenger')?.value,
        cpf: this.ticketForm.get('cpf')?.value,
        card_number: this.ticketForm.get('cardNumber')?.value,
        ship: this.id
      }

      this._ticketService.buyTicket(TICKET).subscribe(data => {
        this.toastr.success('Sua passagem foi comprada com sucesso, consulte no pdf gerado!', 'Compra aprovada!');
        this.router.navigate(['/']);
        this.printSimplePdf();
      }, error => {
        console.log(error);
        this.ticketForm.reset();
      })
    }
  }

}
