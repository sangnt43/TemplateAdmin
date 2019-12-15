import {Component} from '@angular/core';
import { EventService } from './Service/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'ArchitectUI - Angular 7 Bootstrap 4 & Material Design Admin Dashboard Template';
  constructor(private eventService: EventService) {
    this.eventService.getAll()
        .subscribe(data => console.log(data));
  }
  get() {
    this.eventService
  }
}
