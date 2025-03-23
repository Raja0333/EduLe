import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { PagesComponent } from './pages/pages.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthLinkComponent } from './shared/auth-link/auth-link.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { EmailComponent } from './shared/email/email.component';
import { PhoneComponent } from './shared/phone/phone.component';
import { ButtonComponent } from './shared/button/button.component';
import { TestComponent } from './test/test.component';
import { RattingComponent } from './shared/ratting/ratting.component';
import { CardComponent } from './shared/card/card.component';
import { BlogFooterComponent } from './shared/card/blog-footer/blog-footer.component';
import { CoureseFotterComponent } from './shared/card/courese-fotter/courese-fotter.component';
import { HeroComponent } from './home/hero/hero.component';
import { CoursesComponent } from './home/courses/courses.component';
import { HttpClientModule} from '@angular/common/http';
import { BlogsComponent } from './home/blogs/blogs.component';
import { HeadingComponent } from './shared/heading/heading.component';
import { VideoPopupComponent } from './shared/video-popup/video-popup.component';
import { HowItWorkComponent } from './home/how-it-work/how-it-work.component';
import { SliderComponent } from './shared/slider/slider.component';
import { JointUsComponent } from './home/joint-us/joint-us.component';
import { AppStoreComponent } from './home/app-store/app-store.component';
import { FeedbacksComponent } from './home/feedbacks/feedbacks.component';
import { FeedbackCardComponent } from './shared/feedback-card/feedback-card.component';
import { ClientsComponent } from './home/clients/clients.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonHeroComponent } from './shared/common-hero/common-hero.component';
import { MapComponent } from './contact/map/map.component';
import { AddressComponent } from './contact/address/address.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCourseComponent,
    PagesComponent,
    BlogComponent,
    ContactComponent,
    MenuComponent,
    AuthLinkComponent,
    SocialLinksComponent,
    EmailComponent,
    PhoneComponent,
    ButtonComponent,
    TestComponent,
    RattingComponent,
    CardComponent,
    BlogFooterComponent,
    CoureseFotterComponent,
    HeroComponent,
    CoursesComponent,
    BlogsComponent,
    HeadingComponent,
    VideoPopupComponent,
    HowItWorkComponent,
    SliderComponent,
    JointUsComponent,
    AppStoreComponent,
    FeedbacksComponent,
    FeedbackCardComponent,
    ClientsComponent,
    FooterComponent,
    CommonHeroComponent,
    MapComponent,
    AddressComponent,
    AboutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
