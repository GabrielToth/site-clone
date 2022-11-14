import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainComponent } from './main/main.component';
import { EntryContentComponent } from './main/home/entry-content/entry-content.component';
import { VideosPresentationComponent } from './main/home/videos-presentation/videos-presentation.component';
import { ServicesCategoryComponent } from './main/home/services-category/services-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    EntryContentComponent,
    VideosPresentationComponent,
    ServicesCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
