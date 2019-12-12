import {Component, HostListener, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../theme-options';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {sidebarData} from 'src/static/options.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  public extraParameter: any;
  private sideBarData: Array<any>;

  constructor(public globals: ThemeOptions, private activatedRoute: ActivatedRoute) {
    let _ = this.sideBarData = [];

    console.log("side-bar",sidebarData);
    // service 
    sidebarData.forEach(item => {
      let current_index = _.length - 1;
     
      if(!item.child && !item.url){
        _.push(item);
      } else if(!item.url){
        // lv 2
        _[current_index]['lv'] = 2;
        if(!_[current_index]['child'])
          _[current_index]['child'] = [item];
        else _[current_index]['child'].push(item)
      } else {
        // lv 3
        _[current_index]['lv'] = 3;
        if(!_[current_index]['child'])
          _[current_index]['child'] = [item];
        else _[current_index]['child'].push(item)
      }
    })
  }

  @select('config') public config$: Observable<any>;

  private newInnerWidth: number;
  private innerWidth: number;
  activeId = 'dashboardsMenu';

  toggleSidebar() {
    this.globals.toggleSidebar = !this.globals.toggleSidebar;
  }

  sidebarHover() {
    this.globals.sidebarHover = !this.globals.sidebarHover;
  }

  ngOnInit() {
    setTimeout(() => {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < 1200) {
        this.globals.toggleSidebar = true;
      }
    });

    this.extraParameter = this.activatedRoute.snapshot.firstChild.data.extraParameter;

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;

    if (this.newInnerWidth < 1200) {
      this.globals.toggleSidebar = true;
    } else {
      this.globals.toggleSidebar = false;
    }

  }
}
