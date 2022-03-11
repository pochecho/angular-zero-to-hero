import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService } from './person.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [PersonService],
  imports: [CommonModule, HttpClientModule],
  exports: [PersonService],
})
export class ServicesModule {}
