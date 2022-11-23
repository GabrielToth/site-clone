import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './main/main.component';
import { EntryContentComponent } from './main/home/entry-content/entry-content.component';
import { VideosPresentationComponent } from './shared/videos-presentation/videos-presentation.component';
import { ServicesCategoryComponent } from './shared/services-category/services-category.component';
import { HomeComponent } from './main/home/home.component';
import { AboutEnterpriseComponent } from './main/about-enterprise/about-enterprise.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ClientsComponent } from './main/clients/clients.component';
import { NavigationButtonsComponent } from './main/home/navigation-buttons/navigation-buttons.component';
import { BeAPartnershipComponent } from './main/home/be-a-partnership/be-a-partnership.component';
import { ContactComponent } from './main/contact/contact.component';
import { SupportComponent } from './main/support/support.component';
import { SolutionsComponent } from './shared/header/solutions/solutions.component';
import { PresentationComponent } from './main/solutions/presentation/presentation.component';
import { SatFiscalComponent } from './main/solutions/sat-fiscal/sat-fiscal.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './main/contact/forms/forms.component';
import { SolutionsTitleComponent } from './shared/solutions/solutions-title/solutions-title.component';
import { BalconySellComponent } from './main/solutions/balcony-sell/balcony-sell.component';
import { CardsBottomComponent } from './shared/cards-bottom/cards-bottom.component';
import { SolutionsTopContentComponent } from './shared/solutions/solutions-top-content/solutions-top-content.component';
import { FaqComponent } from './main/faq/faq.component';
import { VideosPrincipalsComponent } from './shared/videos-principals/videos-principals.component';
import { CardsCategoryNavigationComponent } from './shared/cards-category-navigation/cards-category-navigation.component';

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
    ContactComponent,
    SupportComponent,

    FormsComponent,

    SolutionsComponent,
    PresentationComponent,
    SatFiscalComponent,
    SolutionsTitleComponent,
    BalconySellComponent,
    CardsBottomComponent,
    SolutionsTopContentComponent,
    FaqComponent,
    VideosPrincipalsComponent,
    CardsCategoryNavigationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
