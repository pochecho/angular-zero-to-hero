import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsUserOddGuard } from './guards/is-user-odd.guard';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FavoritesElementsComponent } from './pages/home/favorites-elements/favorites-elements.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonDetailComponent } from './pages/person-detail/person-detail.component';
import { PersonListComponent } from './pages/person-list/person-list.component';
import { WipComponent } from './pages/wip/wip.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: 'favorites',
        component: FavoritesElementsComponent
      }
    ]

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
    canActivate: [IsUserOddGuard]

  },

  {
    path: '**',
    component: WipComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //forChild
  exports: [RouterModule],
})
export class AppRoutingModule {}
