import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ApplicationComponent }  from './components/application/application';
import { NavbarComponent }  from './components/navbar/navbar';
import { SearchComponent }  from './components/search/search';
import { CourseListingComponent }  from './components/course-listing/course-listing';
import { CourseDetailComponent } from './components/course-detail/course-detail';
import { HomeComponent } from './components/home/home';
import { FooterComponent }  from './components/footer/footer';
import {CourseService} from './services/course-service';

@NgModule({
    imports:      [ BrowserModule,
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
                    FooterComponent,
                     ],
    providers:    [CourseService,
                    {provide: LocationStrategy, useClass: HashLocationStrategy}], 
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }
