import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicationComponent }  from './components/application/application';
import { NavbarComponent }  from './components/navbar/navbar';
import { SearchComponent }  from './components/search/search';
import { CartComponent } from './components/cart/cart';
import { CourseListingComponent }  from './components/course-listing/course-listing';
import { CourseDetailComponent } from './components/course-detail/course-detail';
import { HomeComponent } from './components/home/home';
import { FooterComponent }  from './components/footer/footer';
import { CourseService } from './services/course-service';
import { CartService } from './services/cart-service';

@NgModule({
    imports:      [ BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpModule, 
                    RouterModule.forRoot([
                        {path: '', component:HomeComponent},
                        {path: 'courses/:courseId', component: CourseDetailComponent}
                        ]) ],
    declarations: [ ApplicationComponent,
                    NavbarComponent,
                    HomeComponent,
                    CourseDetailComponent,
                    CourseListingComponent,
                    SearchComponent,
                    CartComponent,
                    FooterComponent,
                     ],
    providers:    [ CourseService,
                    CartService, 
                    {provide: LocationStrategy, useClass: HashLocationStrategy}], 
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }
