import { Component, Input, OnChanges, OnInit } from '@angular/core';
import json from '../../../assets/data/customer-details.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnChanges {
  @Input() selectedActor: string = '';
  actorsList = json;
  actorInfo: any;

  ngOnChanges(changes: any) {
    this.actorInfo = this.actorsList.find(
      (actor) => actor.username === this.selectedActor
    );
    console.log(this.actorInfo);
  }
  constructor() {}
}
