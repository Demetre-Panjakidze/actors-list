import { Component, Input, OnChanges, OnInit } from '@angular/core';
import json from '../../../assets/data/customer-details.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit, OnChanges {
  @Input() selectedActor: string = '';

  ngOnInit() {}
  ngOnChanges(changes: any) {
    console.log(this.selectedActor);
  }
  constructor() {}
}
