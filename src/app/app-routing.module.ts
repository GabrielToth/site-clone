import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRoutingModule } from './main/main-routing.module';
import { HeaderRoutingModule } from './shared/header/header-routing.module';


const routes: Routes = [];

@NgModule({
	declarations: [
	],
	imports: [
		RouterModule.forRoot(routes),
		MainRoutingModule,
		HeaderRoutingModule
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
