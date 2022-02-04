import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';

import { AboutUsComponent } from './Final/about-us/about-us.component';
import { HomepageComponent } from './Final/homepage/homepage.component';
import { ContactUsComponent } from './Final/contact-us/contact-us.component';
import { BlogComponent } from './Final/blog/blog.component';
import { EventComponent } from './Final/event/event.component';
import { FooterComponent } from './Final/footer/footer.component';
import { CoursesComponent } from './Final/courses/courses.component';
import { QuizComponent } from './Final/quiz/quiz.component';
import { LoginComponent } from './Final/login/login.component';
import { LoginMainComponent } from './Final/login-main/login-main.component';
import { BidComponent } from './Final/bid/bid.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
       
        AboutUsComponent,
       
        HomepageComponent,
       
        ContactUsComponent,
       
        BlogComponent,
       
        EventComponent,
       
        FooterComponent,
       
        CoursesComponent,
       
        QuizComponent,
       
        LoginComponent,
       
        LoginMainComponent,
       
        BidComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        PresentationModule,
        SectionsModule,
        ComponentsModule,
        ExamplesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
