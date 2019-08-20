import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FruitsManagementModule } from './fruits-management/fruits-management.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FruitsManagementModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
