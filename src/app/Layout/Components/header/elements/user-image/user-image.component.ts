import {Component, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
})
export class UserImageComponent implements OnInit {
  private userImage: string;
  constructor(public globals: ThemeOptions) {
    this.userImage = "./assets/images/avatars/1.jpg";
  }

  ngOnInit() {
  }

}
