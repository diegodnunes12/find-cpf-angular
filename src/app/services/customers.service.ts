import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { CustomersInterface } from './../interfaces/customers.interface';

@Injectable({providedIn: "root"})
export class CustomersService {

    constructor(private httpClient: HttpClient){ }

    public findCpf(): Observable<CustomersInterface[]> {
      return this.httpClient.get<CustomersInterface[]>("assets/data/base.json");
    }
}
