import { Component, OnInit } from '@angular/core';
import EventItem from 'src/assets/models/EventItem'
import { EventsService } from 'src/app/services/events/events.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: EventItem[];
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents('').subscribe((events) => {
      this.events = events;
      console.log(this.events);
    });
  }

}
