import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountDownComponent } from './count-down/count-down.component';
import { NewlywedsComponent } from './newlyweds/newlyweds.component';
import { WeddingItineraryComponent } from './wedding-itinerary/wedding-itinerary.component';
import { RecipesAddComponent } from './recipes-for-happy-marriage/components/recipes-add/recipes-add.component';
import { RecipesListComponent } from './recipes-for-happy-marriage/components/recipes-list/recipes-list.component';
import { TeamComponent } from './team/team.component';
import { CharityComponent } from './charity/charity.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RsvpComponent } from './rsvp/rsvp.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: CountDownComponent },
  { path: 'newlyweds', component: NewlywedsComponent },
  // { path: 'our-story', component: OurStoryComponent },
  { path: 'wedding-itinerary', component: WeddingItineraryComponent },
  { path: 'team', component: TeamComponent },
  {
    path: 'gallery', component: GalleryComponent  },
  {
    path: 'recipes-for-happy-marriage',
    children: [
      { path: '', component: RecipesListComponent },
      { path: 'add', component: RecipesAddComponent },
    ]
  },
  { path: 'charity', component: CharityComponent },
  { path: 'rsvp', component: RsvpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
