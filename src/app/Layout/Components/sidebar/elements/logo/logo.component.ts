import { Component, OnInit } from '@angular/core';
import {logo} from 'src/static/options.json';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent implements OnInit {

  public logo;
  constructor() {
    this.logo = logo
  }

  ngOnInit() {
  }

}
