import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonDetailComponent } from './pages/person-detail/person-detail.component';
import { PersonListComponent } from './pages/person-list/person-list.component';
import { WipComponent } from './pages/wip/wip.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },

  {
    path: 'person',
    component: PersonListComponent,
  },
  {
    path: 'person/:id',
    component: PersonDetailComponent,
  },

  {
    path: '**',
    component: WipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
