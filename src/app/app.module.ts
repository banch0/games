import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/date.service';

import { MatExpansionModule } from '@angular/material/expansion';
import { AppComponent } from './app.component';
import { ThemComponent } from './them/them.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { ZadaFormComponent } from './zadachi/zada-form/zada-form.component';
import { ZadaListComponent } from './zadachi/zada-list/zada-list.component';
import { ZadaItemComponent } from './zadachi/zada-item/zada-item.component';
import { ZadachService } from './zadach.service';
import { ZadachiComponent } from './zadachi/zadachi.component';



@NgModule({
  declarations: [
    AppComponent,
    ThemComponent,
    NavbarComponent,
    FooterComponent,
    ZadaFormComponent,
    ZadaListComponent,
    ZadaItemComponent,
    ZadachiComponent
  ],
  imports: [
    BrowserModule, MatChipsModule, FormsModule,
    HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) 
    ,MatProgressSpinnerModule,MatCheckboxModule,MatButtonToggleModule,MatExpansionModule,
    // HttpClientModule, 
    // HttpClient,
    MatCardModule,MatMenuModule,MatGridListModule,MatButtonModule, MatIconModule, MatSidenavModule,BrowserAnimationsModule,MatToolbarModule
  ],
  providers: [ ZadachService],
  bootstrap: [AppComponent]
})
export class AppModule { }
