import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-cpf',
  templateUrl: './find-cpf.component.html',
  styleUrls: ['./find-cpf.component.scss']
})
export class FindCpfComponent implements OnInit {
  public cpf = new FormControl('');

  constructor(private route: Router) { }

  ngOnInit(): void { }

  public findCpf($event) {
    $event.preventDefault();
    this.route.navigate([this.cpf.value]);
  }

}
