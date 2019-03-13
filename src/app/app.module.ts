import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { AaeHomeComponent } from './aae-home/aae-home.component';
import { AaeHomeTileComponent } from './aae-home-tile/aae-home-tile.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioConstructorComponent } from './portfolio-constructor/portfolio-constructor.component';
import { FormsModule }   from '@angular/forms';

//Material Modules
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    AaeHomeComponent,
    AaeHomeTileComponent,
    PortfolioConstructorComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    BrowserModule,
    MatGridListModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
