import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-constructor',
  templateUrl: './portfolio-constructor.component.html',
  styleUrls: ['./portfolio-constructor.component.css']
})
export class PortfolioConstructorComponent implements OnInit {

  key = ' ';

  constructor() { }

  ngOnInit() {
  }

  log(): void {
    console.log('Click Submit');
  }
}
