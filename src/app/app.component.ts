import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedActor: string = '';
  searchOnScreen: boolean = true;
  infoOnScreen: boolean = false;

  messageGetter(event: any) {
    this.selectedActor = event;
  }
  searchDisplayed(event: any) {
    this.searchOnScreen = false;
    this.infoOnScreen = true;
  }
  infoDisplayed(event: any) {
    this.searchOnScreen = true;
    this.infoOnScreen = false;
  }
}
