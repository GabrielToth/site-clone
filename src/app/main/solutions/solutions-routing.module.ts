import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalconySellComponent } from './balcony-sell/balcony-sell.component';
import { BudgetComponent } from './budget/budget.component';
import { BusinessManagementComponent } from './business-management/business-management.component';
import { ChartComponent } from './chart/chart.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { ElectronicTransportComponent } from './electronic-transport/electronic-transport.component';
import { ErpSoftwareComponent } from './erp-software/erp-software.component';
import { ErpSystemComponent } from './erp-system/erp-system.component';
import { EtKnowledgeComponent } from './et-knowledge/et-knowledge.component';
import { FinancialComponent } from './financial/financial.component';
import { NfcEComponent } from './nfc-e/nfc-e.component';
import { NfeComponent } from './nfe/nfe.component';
import { OrderOfServiceComponent } from './order-of-service/order-of-service.component';
import { PresentationSolutionsComponent } from './presentation-solutions/presentation-solutions.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SatEquipmentComponent } from './sat-equipment/sat-equipment.component';
import { SatFiscalComponent } from './sat-fiscal/sat-fiscal.component';
import { ServiceInvoicesComponent } from './service-invoices/service-invoices.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { StandardProductionComponent } from './standard-production/standard-production.component';
import { SupplierRegistrationComponent } from './supplier-registration/supplier-registration.component';
import { TaxAndFiscalComponent } from './tax-and-fiscal/tax-and-fiscal.component';
import { TaxSpedComponent } from './tax-sped/tax-sped.component';
import { WholesaleComponent } from './wholesale/wholesale.component';

export const routes: Routes = [
	{
		path: 'solutions',
		children: [
			{
				path: "balcony-sell",
				component: BalconySellComponent
			},
			{
				path: "budget",
				component: BudgetComponent
			},
			{
				path: "business-management",
				component: BusinessManagementComponent
			},
			{
				path: "chart",
				component: ChartComponent
			},
			{
				path: "customer-registration",
				component: CustomerRegistrationComponent
			},
			{
				path: "electronic-transport",
				component: ElectronicTransportComponent
			},
			{
				path: "erp-software",
				component: ErpSoftwareComponent
			},
			{
				path: "erp-system",
				component: ErpSystemComponent
			},
			{
				path: "et-knowledge",
				component: EtKnowledgeComponent
			},
			{
				path: "financial",
				component: FinancialComponent
			},
			{
				path: "nfc-e",
				component: NfcEComponent
			},
			{
				path: "nfe",
				component: NfeComponent
			},
			{
				path: "order-of-service",
				component: OrderOfServiceComponent
			},
			{
				path: "presentation",
				component: PresentationComponent
			},
			{
				path: "presentation-solutions",
				component: PresentationSolutionsComponent
			},
			{
				path: "restaurant",
				component: RestaurantComponent
			},
			{
				path: "sat-equipment",
				component: SatEquipmentComponent
			},
			{
				path: "sat-fiscal",
				component: SatFiscalComponent
			},
			{
				path: "service-invoices",
				component: ServiceInvoicesComponent
			},
			{
				path: "shopping",
				component: ShoppingComponent
			},
			{
				path: "standard-production",
				component: StandardProductionComponent
			},
			{
				path: "supplier-registration",
				component: SupplierRegistrationComponent
			},
			{
				path: "tax-and-fiscal",
				component: TaxAndFiscalComponent
			},
			{
				path: "tax-sped",
				component: TaxSpedComponent
			},
			{
				path: "wholesale",
				component: WholesaleComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SolutionsRoutingModule { }
