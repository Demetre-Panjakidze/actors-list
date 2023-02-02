import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import json from '../../../assets/data/customer-list.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  actorsList = json;
  selectedOption = '';
}
