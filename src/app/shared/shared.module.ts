import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsToKnowMoreComponent } from './buttons-to-know-more/buttons-to-know-more.component';
import { CardsBottomComponent } from './cards-bottom/cards-bottom.component';
import { CardsCategoryNavigationComponent } from './cards-category-navigation/cards-category-navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HeadlineComponent } from './headline/headline.component';
import { PromoErpComponent } from './promo-erp/promo-erp.component';
import { ServicesCategoryComponent } from './services-category/services-category.component';
import { TopContentComponent } from './solutions/top-content/top-content.component';
import { ReducedTopContentComponent } from './solutions/top-content/reduced-top-content/reduced-top-content.component';
import { SolutionsTitleComponent } from './solutions/top-content/solutions-title/solutions-title.component';
import { SolutionsTopContentComponent } from './solutions/top-content/solutions-top-content/solutions-top-content.component';
import { TopPageContentComponent } from './top-page-content/top-page-content.component';
import { VideosMidPageComponent } from './videos-mid-page/videos-mid-page.component';
import { VideosPresentationComponent } from './videos-presentation/videos-presentation.component';
import { VideosSatComponent } from './videos-sat/videos-sat.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { MainRoutingModule } from '../main/main-routing.module';
import { RouterModule } from '@angular/router';
import { routes } from '../main/solutions/solutions-routing.module';
import { VideoSmallComponent } from './videos/video-small/video-small.component';
import { VideoMediumComponent } from './videos/video-medium/video-medium.component';
import { VideoLargeComponent } from './videos/video-large/video-large.component';




@NgModule({
  declarations: [
    ButtonsToKnowMoreComponent,
    CardsBottomComponent,
    CardsCategoryNavigationComponent,
    FooterComponent,

    HeadlineComponent,
    PromoErpComponent,

    ServicesCategoryComponent,

    TopContentComponent,
    ReducedTopContentComponent,
    SolutionsTitleComponent,
    SolutionsTopContentComponent,

    TopPageContentComponent,
    VideosMidPageComponent,
    VideosPresentationComponent,
    VideosSatComponent,
    WhatsappComponent,
    VideoSmallComponent,
    VideoMediumComponent,
    VideoLargeComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    [RouterModule.forChild(routes)],
  ],
  exports: [
    ButtonsToKnowMoreComponent,
    CardsBottomComponent,
    CardsCategoryNavigationComponent,
    FooterComponent,

    HeadlineComponent,
    PromoErpComponent,

    ServicesCategoryComponent,

    TopContentComponent,
    ReducedTopContentComponent,
    SolutionsTitleComponent,
    SolutionsTopContentComponent,

    TopPageContentComponent,
    VideosMidPageComponent,
    VideosPresentationComponent,
    VideosSatComponent,
    WhatsappComponent
  ]
})
export class SharedModule { }
