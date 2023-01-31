import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import json from '../../../assets/data/customer-list.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() selectedActor = new EventEmitter<any>();
  @Output() searchOnScreen = new EventEmitter<any>();
  actorsList = json;
  selectedOption = '';
  btnDisabled: boolean = false;
  searchDisplayed: boolean = true;

  checkValue = () => {
    if (!this.selectedOption) {
      this.btnDisabled = true;
    } else {
      this.btnDisabled = false;
    }
  };

  search(event: any) {
    this.searchDisplayed = false;
    event.preventDefault();
    this.searchOnScreen.emit(this.searchDisplayed);
    this.selectedActor.emit(this.selectedOption);
  }

  selectedOptionChange(event: any) {
    this.checkValue();
  }

  ngOnInit() {
    this.checkValue();
  }
}
