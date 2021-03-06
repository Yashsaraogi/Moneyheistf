import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';


import { FooterComponent } from './Final/footer/footer.component';

import { QuizComponent } from './Final/quiz/quiz.component';
import { LoginComponent } from './Final/login/login.component';
import { LoginMainComponent } from './Final/login-main/login-main.component';
import { BidComponent } from './Final/bid/bid.component';
import { Round2Component } from './round2/round2.component';
import { Round3Component } from './round3/round3.component';
import { Round4Component } from './round4/round4.component';
import { Round5Component } from './round5/round5.component';
import { Round6Component } from './round6/round6.component';
import { Round7Component } from './round7/round7.component';
import { RndComponent } from './rnd/rnd.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
       
      
       
     
       
        FooterComponent,
       
        
        QuizComponent,
       
        LoginComponent,
       
        LoginMainComponent,
       
        BidComponent,
       
        Round2Component,
       
        Round3Component,
       
        Round4Component,
       
        Round5Component,
       
        Round6Component,
       
        Round7Component,
       
        RndComponent
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
        ExamplesModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
