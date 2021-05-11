import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CurrencyComponent } from './currency/currency.component';
import { HomeComponent } from './home/home.component';
import { ItemsDetailsComponent } from './items/items-details/items-details.component';
import { ItemsInfoComponent } from './items/items-info/items-info.component';
import { ItemsComponent } from './items/items.component';
import { NopeComponent } from './nope/nope.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'nope', component: NopeComponent },
  { path: 'currency', component: CurrencyComponent },
  {
    path: 'items/:id',
    component: ItemsComponent,
    children: [
      {
        path: 'info',
        component: ItemsInfoComponent,
      },
      { path: 'details', component: ItemsDetailsComponent },
    ],
  },
  { path: 'redirect', redirectTo: 'nope' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
