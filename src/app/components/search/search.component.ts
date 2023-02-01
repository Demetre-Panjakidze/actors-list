import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import json from '../../../assets/data/customer-list.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
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

  selectedOptionChange(event: any) {
    this.checkValue();
  }

  ngOnInit() {
    this.checkValue();
  }
}
