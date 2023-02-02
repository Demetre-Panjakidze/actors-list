import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from 'src/assets/data/customer-details.json';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  actorInfo: any;
  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit() {
    const username = this.activatedRouter.snapshot.params['username'];
    this.actorInfo = data.find((actor: any) => actor.username === username);
  }
}
