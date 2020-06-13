import { Component, OnInit, Input } from '@angular/core';
import EventItem from 'src/assets/models/EventItem';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  @Input() events: EventItem[];
  @Input() category: string;

  constructor() { }

  ngOnInit(): void {

  }

}
