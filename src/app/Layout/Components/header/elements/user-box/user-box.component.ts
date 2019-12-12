import {Component, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';
import { UserImageComponent } from '../user-image/user-image.component';
import {userDropDownManager} from 'src/static/user.options.json';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styles:[
    `
      .dropdown-item{
        cursor: pointer;
      }
    `
  ]
})
export class UserBoxComponent implements OnInit {
  private dropDownItem: Array<Object>;
  constructor(public globals: ThemeOptions) {
    this.dropDownItem = userDropDownManager
  }

  ngOnInit() {
  }

}
