import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import json from '../../../assets/data/customer-details.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnChanges {
  @Input() selectedActor: string = '';
  @Output() infoOnScreen = new EventEmitter<any>();
  actorsList = json;
  actorInfo: any;
  infoDisplayed: boolean = true;

  ngOnChanges(changes: any) {
    this.actorInfo = this.actorsList.find(
      (actor) => actor.username === this.selectedActor
    );
  }

  goBack = () => {
    this.infoDisplayed = false;
    this.infoOnScreen.emit(this.infoDisplayed);
  };

  constructor() {}
}
