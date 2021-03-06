import { Component, OnInit } from '@angular/core';
import {StoreTestService} from "../store-test.service";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  forWrapper() {
    return this.service.forWrapper
  }

  forCreate() {
    return this.service.forCreate
  }

  forTell() {
    return this.service.forTell
  }

  forInput() {
    return this.service.forInput
  }

  prefix: any;
  pathToAssets = 'http://cdn.ramman.net/flexy-view/islam/visit/1.01/assets/';

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
