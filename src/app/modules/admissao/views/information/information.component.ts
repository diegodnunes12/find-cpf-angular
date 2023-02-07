import { CustomersInterface } from './../../../../interfaces/customers.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomersService } from 'src/app/services/customers.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public info$: Observable<CustomersInterface>;

  constructor(private service: CustomersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.info$ = this.service.findCpf().pipe(
        map((customers) => {
          return customers.find(customer => customer.cpf === params.cpf)
        })
      );
    });
  }

}
