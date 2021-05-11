import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NopeComponent } from './nope/nope.component';
import { HeaderComponent } from './header/header.component';
import { AboutTestComponent } from './about-test/about-test.component';
import { ColorDirective } from './color.directive';
import { CurrencyComponent } from './currency/currency.component';
import { ChartComponent } from './currency/chart/chart.component';
import { ItemsComponent } from './items/items.component';
import { ItemsInfoComponent } from './items/items-info/items-info.component';
import { ItemsDetailsComponent } from './items/items-details/items-details.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    NopeComponent,
    HeaderComponent,
    AboutTestComponent,
    ColorDirective,
    CurrencyComponent,
    ChartComponent,
    ItemsComponent,
    ItemsInfoComponent,
    ItemsDetailsComponent,
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-GB',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
