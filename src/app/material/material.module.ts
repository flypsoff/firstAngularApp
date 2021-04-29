import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [MatToolbarModule, MatInputModule, MatButtonModule, MatBadgeModule],
  exports: [MatToolbarModule, MatInputModule, MatButtonModule, MatBadgeModule],
})
export class MaterialModule {}
