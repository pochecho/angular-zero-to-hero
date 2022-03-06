import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [AboutUsComponent, HomeComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [ComponentsModule],
})
export class PagesModule {}
