import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  num: number = 101;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.num++;
  }
}