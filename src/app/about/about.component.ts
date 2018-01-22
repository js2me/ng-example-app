import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  firstName = '';
  lastName = '';

  constructor() { }

  ngOnInit() {
  }

}
