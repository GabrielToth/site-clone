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
import { SolutionsTitleComponent } from './shared/solutions/top-content/solutions-title/solutions-title.component';
import { BalconySellComponent } from './main/solutions/balcony-sell/balcony-sell.component';
import { CardsBottomComponent } from './shared/cards-bottom/cards-bottom.component';
import { SolutionsTopContentComponent } from './shared/solutions/top-content/solutions-top-content/solutions-top-content.component';
import { CardsCategoryNavigationComponent } from './shared/cards-category-navigation/cards-category-navigation.component';
import { VideosSatComponent } from './shared/videos-sat/videos-sat.component';
import { RestaurantComponent } from './main/solutions/restaurant/restaurant.component';
import { TopContentComponent } from './shared/solutions/top-content/top-content.component';
import { SatEquipmentComponent } from './main/solutions/sat-equipment/sat-equipment.component';
import { ButtonsToKnowMoreComponent } from './shared/buttons-to-know-more/buttons-to-know-more.component';
import { NfcEComponent } from './main/solutions/nfc-e/nfc-e.component';
import { TopPageContentComponent } from './shared/top-page-content/top-page-content.component';
import { NfeComponent } from './main/solutions/nfe/nfe.component';
import { ServiceInvoicesComponent } from './main/solutions/service-invoices/service-invoices.component';
import { WholesaleComponent } from './main/solutions/wholesale/wholesale.component';
import { TaxAndFiscalComponent } from './main/solutions/tax-and-fiscal/tax-and-fiscal.component';
import { BudgetComponent } from './main/solutions/budget/budget.component';
import { EtKnowledgeComponent } from './main/solutions/et-knowledge/et-knowledge.component';
import { ElectronicTransportComponent } from './main/solutions/electronic-transport/electronic-transport.component';
import { BusinessManagementComponent } from './main/solutions/business-management/business-management.component';
import { ErpSoftwareComponent } from './main/solutions/erp-software/erp-software.component';
import { TaxSpedComponent } from './main/solutions/tax-sped/tax-sped.component';
import { ErpSystemComponent } from './main/solutions/erp-system/erp-system.component';
import { ChartComponent } from './main/solutions/chart/chart.component';
import { ReducedTopContentComponent } from './shared/solutions/top-content/reduced-top-content/reduced-top-content.component';
import { ShoppingComponent } from './main/solutions/shopping/shopping.component';
import { OrderOfServiceComponent } from './main/solutions/order-of-service/order-of-service.component';
import { FinancialComponent } from './main/solutions/financial/financial.component';
import { standardProductionComponent } from './main/solutions/standard-production/standard-production.component';
import { PrivacyPolicyComponent } from './main/privacy-policy/privacy-policy.component';
import { HeadlineComponent } from './shared/headline/headline.component';
import { PromoErpComponent } from './shared/promo-erp/promo-erp.component';
import { VideosMidPageComponent } from './shared/videos-mid-page/videos-mid-page.component';
import { WhatsappComponent } from './shared/whatsapp/whatsapp.component';
import { IrrelevantTextComponent } from './shared/irrelevant-text/irrelevant-text.component';

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
    CardsCategoryNavigationComponent,
    VideosSatComponent,
    RestaurantComponent,
    TopContentComponent,
    ButtonsToKnowMoreComponent,
    SatEquipmentComponent,
    NfcEComponent,
    TopPageContentComponent,
    NfeComponent,
    ServiceInvoicesComponent,
    TaxAndFiscalComponent,
    WholesaleComponent,
    BudgetComponent,
    EtKnowledgeComponent,
    ElectronicTransportComponent,
    BusinessManagementComponent,
    ErpSoftwareComponent,
    TaxSpedComponent,
    ErpSystemComponent,
    ChartComponent,
    ReducedTopContentComponent,
    ShoppingComponent,
    FinancialComponent,
    OrderOfServiceComponent,
    FinancialComponent,
    OrderOfServiceComponent,
    standardProductionComponent,
    PrivacyPolicyComponent,
    HeadlineComponent,
    PromoErpComponent,
    VideosMidPageComponent,
    WhatsappComponent,
    IrrelevantTextComponent
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
