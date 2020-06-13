import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/services/events/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent implements OnInit {
  addEventForm: FormGroup;
  categories: string[];
  activitiesFromCategory;
  activities;
  constructor(private fb: FormBuilder, private eventsService: EventsService, private cd: ChangeDetectorRef, private router: Router, private auth: AuthService) {
    this.categories = require('../../../shared/data/categories.json');
    this.activities = require('../../../shared/data/activities.json');
    this.activitiesFromCategory = [];
  }


  ngOnInit() {
    this.addEventForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      category: ['', Validators.required],
      activity: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.maxLength(30)],
      description: ['', Validators.maxLength(150)],
      isSpecial: [false],
      link: ['']
    });
  }

  setActivity(category: string): void {
    this.cd.detach();
    this.activitiesFromCategory = this.activities[category];
    this.cd.reattach();
    this.cd.detectChanges();
  }

  onSubmit() {
    if (this.addEventForm.valid) {
      this.auth.verifyAdmin().subscribe(isAdmin => {
        if (isAdmin) {
          this.eventsService.addEvent(this.addEventForm.value);
        } else {
          this.eventsService.addEventToQueue(this.addEventForm.value);
        }
        this.router.navigate(['/events']);
      });
    } else {
      console.log('Invalid form');
    }
    this.addEventForm.markAsDirty();
    this.addEventForm.markAllAsTouched();
    this.cd.detectChanges();
    console.log(this.addEventForm);
  }


}
