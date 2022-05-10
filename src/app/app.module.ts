import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FireBaseModule } from './firebase.module';
import { AppComponent } from './main/app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavComponent } from './sidenav/sidenav.component';
import { NewlywedsComponent } from './newlyweds/newlyweds.component';
import { RecipesAddComponent } from './recipes-for-happy-marriage/components/recipes-add/recipes-add.component';
import { RecipesListComponent } from './recipes-for-happy-marriage/components/recipes-list/recipes-list.component';
import { CountDownComponent } from './count-down/count-down.component';
import { WeddingItineraryComponent } from './wedding-itinerary/wedding-itinerary.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';
import { CharityComponent } from './charity/charity.component';
import { GalleriaModule } from 'primeng/galleria';
import { GalleryComponent } from './gallery/gallery.component';
import { RsvpComponent } from './rsvp/rsvp.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    CountDownComponent,
    WeddingItineraryComponent,
    NewlywedsComponent,
    RecipesAddComponent,
    RecipesListComponent,
    GalleryComponent,
    CharityComponent,
    TeamComponent,
    RsvpComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FireBaseModule,
    MaterialModule,
    NoopAnimationsModule,
    ToastrModule.forRoot(),
    GoogleMapsModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
