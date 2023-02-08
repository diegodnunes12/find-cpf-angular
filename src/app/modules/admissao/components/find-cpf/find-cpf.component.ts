import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { cpf } from 'cpf-cnpj-validator';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-find-cpf',
  templateUrl: './find-cpf.component.html',
  styleUrls: ['./find-cpf.component.scss']
})
export class FindCpfComponent implements OnInit, OnDestroy {
  public cpfControl = new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]);
  public message: string = "";
  private subscriptionValue: Subscription;
  private subscriptionParams: Subscription;

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptionParams = this.activatedRoute.params.subscribe(params => this.cpfControl.setValue(params.cpf))
    this.subscriptionValue = this.cpfControl.valueChanges.subscribe(() => this.message = "");
  }

  public findCpf($event) {
    $event.preventDefault();
    const cpfValue = this.cpfControl.value.replaceAll(".", "").replaceAll("-", "");

    if(cpfValue === "") {
      this.message = "* Por favor, insira um CPF válido";
    }

    if(cpf.isValid(cpfValue)) {
      this.route.navigate([cpfValue]);
    } else {
      this.message = "* Por favor, insira um CPF válido";
    }
  }

  ngOnDestroy(): void {
    this.subscriptionValue.unsubscribe();
    this.subscriptionParams.unsubscribe();
  }
}
