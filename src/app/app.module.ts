import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BackIconComponent } from './ui/back-icon/back-icon.component';
import { CrossIconComponent } from './ui/cross-icon/cross-icon.component';
import { DpLogoComponent } from './dp-logo/dp-logo.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ProfileComponent } from './profile/profile.component';
import { TypingComponent } from './typing/typing.component';
import { KeySkillBtnsComponent } from './key-skill-btns/key-skill-btns.component';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileCardComponent } from './profile-card/profile-card.component'; 
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BackIconComponent,
    CrossIconComponent,
    DpLogoComponent,
    ContactComponent,
    LandingPageComponent,
    NavigatorComponent,
    ProfileComponent,
    TypingComponent,
    KeySkillBtnsComponent,
    ProjectsComponent,
    PortfolioComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    ProfileCardComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
