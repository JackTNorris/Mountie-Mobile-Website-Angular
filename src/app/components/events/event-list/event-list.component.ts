import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import EventItem from 'src/assets/models/EventItem';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  @Input() events: EventItem[];
  @Input() category: string;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {

  }

}
