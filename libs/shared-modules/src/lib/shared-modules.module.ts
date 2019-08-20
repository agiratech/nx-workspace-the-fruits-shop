import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListsComponent],
  exports: [ListsComponent]
})
export class SharedModulesModule {}
