import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './main/main.component';
import { EntryContentComponent } from './main/home/entry-content/entry-content.component';
import { VideosPresentationComponent } from './main/home/videos-presentation/videos-presentation.component';
import { ServicesCategoryComponent } from './main/home/services-category/services-category.component';
import { HomeComponent } from './main/home/home.component';
import { AboutEnterpriseComponent } from './main/about-enterprise/about-enterprise.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ClientsComponent } from './main/clients/clients.component';
import { NavigationButtonsComponent } from './main/home/navigation-buttons/navigation-buttons.component';
import { BeAPartnershipComponent } from './main/home/be-a-partnership/be-a-partnership.component';
import { ContactComponent } from './main/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    EntryContentComponent,
    VideosPresentationComponent,
    ServicesCategoryComponent,
    HomeComponent,
    AboutEnterpriseComponent,
    FooterComponent,
    ClientsComponent,
    NavigationButtonsComponent,
    BeAPartnershipComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
