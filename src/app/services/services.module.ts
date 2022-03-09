import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService } from './person.service';

@NgModule({
  declarations: [],
  providers: [PersonService],
  imports: [CommonModule],
  exports: [PersonService],
})
export class ServicesModule {}
