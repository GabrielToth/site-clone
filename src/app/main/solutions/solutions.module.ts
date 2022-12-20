import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation/presentation.component';
import { SatFiscalComponent } from './sat-fiscal/sat-fiscal.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { BalconySellComponent } from './balcony-sell/balcony-sell.component';
import { SatEquipmentComponent } from './sat-equipment/sat-equipment.component';
import { NfcEComponent } from './nfc-e/nfc-e.component';
import { NfeComponent } from './nfe/nfe.component';
import { ServiceInvoicesComponent } from './service-invoices/service-invoices.component';
import { TaxAndFiscalComponent } from './tax-and-fiscal/tax-and-fiscal.component';
import { WholesaleComponent } from './wholesale/wholesale.component';
import { EtKnowledgeComponent } from './et-knowledge/et-knowledge.component';
import { BudgetComponent } from './budget/budget.component';
import { ElectronicTransportComponent } from './electronic-transport/electronic-transport.component';
import { BusinessManagementComponent } from './business-management/business-management.component';
import { ErpSoftwareComponent } from './erp-software/erp-software.component';
import { TaxSpedComponent } from './tax-sped/tax-sped.component';
import { ErpSystemComponent } from './erp-system/erp-system.component';
import { ChartComponent } from './chart/chart.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FinancialComponent } from './financial/financial.component';
import { OrderOfServiceComponent } from './order-of-service/order-of-service.component';
import { StandardProductionComponent } from './standard-production/standard-production.component';
import { PresentationSolutionsComponent } from './presentation-solutions/presentation-solutions.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BalconySellComponent,
    BudgetComponent,
    BusinessManagementComponent,
    ChartComponent,
    ElectronicTransportComponent,
    ErpSoftwareComponent,
    ErpSystemComponent,
    EtKnowledgeComponent,
    FinancialComponent,
    NfcEComponent,
    NfeComponent,
    OrderOfServiceComponent,
    PresentationComponent,
    PresentationSolutionsComponent,
    RestaurantComponent,
    SatEquipmentComponent,
    SatFiscalComponent,
    ServiceInvoicesComponent,
    ShoppingComponent,
    StandardProductionComponent,
    TaxAndFiscalComponent,
    TaxSpedComponent,
    WholesaleComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BalconySellComponent,
    BudgetComponent,
    BusinessManagementComponent,
    ChartComponent,
    ElectronicTransportComponent,
    ErpSoftwareComponent,
    ErpSystemComponent,
    EtKnowledgeComponent,
    FinancialComponent,
    NfcEComponent,
    NfeComponent,
    OrderOfServiceComponent,
    PresentationComponent,
    PresentationSolutionsComponent,
    RestaurantComponent,
    SatEquipmentComponent,
    SatFiscalComponent,
    ServiceInvoicesComponent,
    ShoppingComponent,
    StandardProductionComponent,
    TaxAndFiscalComponent,
    TaxSpedComponent,
    WholesaleComponent
  ]
})
export class SolutionsModule { }
