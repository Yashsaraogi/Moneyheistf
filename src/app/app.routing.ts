import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ComponentsComponent } from './components/components.component';
import { SectionsComponent } from './sections/sections.component';
import { AboutusComponent } from './examples/aboutus/aboutus.component';
import { BlogpostComponent } from './examples/blogpost/blogpost.component';
import { BlogpostsComponent } from './examples/blogposts/blogposts.component';
import { ContactusComponent } from './examples/contactus/contactus.component';
import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
import { LandingComponent } from './examples/landing/landing.component';
// import { LoginComponent } from './examples/login/login.component';
import { ProductpageComponent } from './examples/productpage/productpage.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { RegisterComponent } from './examples/register/register.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { PricingComponent } from './examples/pricing/pricing.component';


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


const routes: Routes = [
    { path: '', redirectTo: 'land', pathMatch: 'full' },
    // { path: 'presentation', component: PresentationComponent },
    // { path: 'components', component: ComponentsComponent },
    // { path: 'sections', component: SectionsComponent },
    // { path: 'nucleoicons', component: NucleoiconsComponent },
    // { path: 'examples/aboutus', component: AboutusComponent },
    // { path: 'examples/blogpost', component: BlogpostComponent },
    // { path: 'examples/blogposts', component: BlogpostsComponent },
    // { path: 'examples/contactus', component: ContactusComponent },
    // { path: 'examples/ecommerce', component: EcommerceComponent },
    // { path: 'examples/landing', component: LandingComponent },
    // { path: 'examples/login', component: LoginComponent },
    // { path: 'examples/pricing', component: PricingComponent },
    // { path: 'examples/productpage', component: ProductpageComponent },
    // { path: 'examples/profile', component: ProfileComponent },
    // { path: 'examples/register', component: RegisterComponent },

    { path: 'round2', component: Round2Component },
    { path: 'round3', component: Round3Component },
    { path: 'round4', component: Round4Component },
    { path: 'round5', component: Round5Component },
    { path: 'round6', component: Round6Component },
    { path: 'round7', component: Round7Component },


    { path: 'round', component: RndComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'land', component: LoginComponent },
    { path: 'login', component: LoginMainComponent },
    { path: 'bid', component: BidComponent }


];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: false
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
