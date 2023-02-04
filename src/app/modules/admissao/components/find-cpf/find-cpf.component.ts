import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-cpf',
  templateUrl: './find-cpf.component.html',
  styleUrls: ['./find-cpf.component.scss']
})
export class FindCpfComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public findCpf() {
    this.route.navigate(["/info"])
  }

}
