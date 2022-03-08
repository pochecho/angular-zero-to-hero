import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { WipComponent } from './wip/wip.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
  declarations: [AboutUsComponent, HomeComponent, WipComponent, PersonListComponent, PersonDetailComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [ComponentsModule],
})
export class PagesModule {}
