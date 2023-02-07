import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-cpf',
  templateUrl: './find-cpf.component.html',
  styleUrls: ['./find-cpf.component.scss']
})
export class FindCpfComponent implements OnInit {
  public cpf = new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]);

  constructor(private route: Router) { }

  ngOnInit(): void { }

  public findCpf($event) {
    $event.preventDefault();
    const cpf = this.cpf.value.replaceAll(".", "").replaceAll("-", "");
    this.route.navigate([cpf]);
  }

}
