import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import json from '../../../assets/data/customer-list.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() selectedActor = new EventEmitter<any>();
  actorsList = json;
  selectedOption = '';
  btnDisabled: boolean = false;

  checkValue = () => {
    if (!this.selectedOption) {
      this.btnDisabled = true;
    } else {
      this.btnDisabled = false;
    }
  };

  search(event: any) {
    event.preventDefault();
    this.selectedActor.emit(this.selectedOption);
  }

  selectedOptionChange(event: any) {
    this.checkValue();
  }

  ngOnInit() {
    this.checkValue();
  }
}
