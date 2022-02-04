import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
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
import { HomepageComponent } from './Final/homepage/homepage.component';
import { AboutUsComponent } from './Final/about-us/about-us.component';
import { ContactUsComponent } from './Final/contact-us/contact-us.component';
import { EventComponent } from './Final/event/event.component';
import { BlogComponent } from './Final/blog/blog.component';
import { CoursesComponent } from './Final/courses/courses.component';
import { QuizComponent } from './Final/quiz/quiz.component';
import { LoginComponent } from './Final/login/login.component';
import { LoginMainComponent } from './Final/login-main/login-main.component';
import { BidComponent } from './Final/bid/bid.component';


const routes: Routes =[
    { path: '', redirectTo: 'presentation', pathMatch: 'full' },
    { path: 'presentation',         component: PresentationComponent },
    { path: 'components',           component: ComponentsComponent },
    { path: 'sections',             component: SectionsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/aboutus',     component: AboutusComponent },
    { path: 'examples/blogpost',    component: BlogpostComponent },
    { path: 'examples/blogposts',   component: BlogpostsComponent },
    { path: 'examples/contactus',   component: ContactusComponent },
    { path: 'examples/ecommerce',   component: EcommerceComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/pricing',     component: PricingComponent },
    { path: 'examples/productpage', component: ProductpageComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'examples/register',    component: RegisterComponent },
    { path: 'homepage',    component: HomepageComponent },
    { path: 'about-us',    component: AboutUsComponent },
    { path: 'contact-us',    component: ContactUsComponent },
    { path: 'event',    component: EventComponent },
    { path: 'blog',    component: BlogComponent },
    { path: 'courses',    component: CoursesComponent },
    { path: 'quiz', component:QuizComponent },
    { path: 'land', component:LoginComponent },
    { path:'login', component:LoginMainComponent},
    { path:'bid', component:BidComponent}


];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes,{
          useHash: false
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
