import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationComponent }  from './components/application/application';
import { NavbarComponent }  from './components/navbar/navbar';
import { SearchComponent }  from './components/search/search';
import { CourseListingComponent }  from './components/course-listing/course-listing';
import { FooterComponent }  from './components/footer/footer';
import {CourseService} from './services/course-service';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ ApplicationComponent,
                    NavbarComponent,
                    SearchComponent,
                    CourseListingComponent,
                    FooterComponent ],
    providers:    [CourseService], 
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }
