import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-aae-home',
  templateUrl: './aae-home.component.html',
  styleUrls: ['./aae-home.component.css']
})
export class AaeHomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  explore(): void {
     console.log('Opening GitLab');
     this.route.navigateByUrl('/explore');
  }

  loadPortfolioConstructor(): void {
    console.log('Opening Portfolio Constructor');
    this.route.navigateByUrl('apps/portfolio-constructor');
 }
}
