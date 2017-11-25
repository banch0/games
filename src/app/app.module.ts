import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {HttpModule} from '@angular/http';
// import {HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppComponent } from './app.component';
import { ThemComponent } from './them/them.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips'; 
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    ThemComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, MatChipsModule,
    HttpModule,MatProgressSpinnerModule,MatCheckboxModule,MatButtonToggleModule,MatExpansionModule,
    // HttpClientModule, 
    // HttpClient,
    MatCardModule,MatMenuModule,MatGridListModule,MatButtonModule, MatIconModule, MatSidenavModule,BrowserAnimationsModule,MatToolbarModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
