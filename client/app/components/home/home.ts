import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Course, CourseService } from '../../services/course-service';

@Component({
    selector: 'registration-home-page',
    styleUrls: ['app/components/home/home.css'],
    templateUrl: 'app/components/home/home.html'
})
export class HomeComponent {
    courses: Observable<Course[]>;

    constructor(private courseService: CourseService) {
        this.courses = this.courseService.getCourses();

        this.courseService.searchEvent
            .subscribe(
                params => this.courses = this.courseService.search(params),
                    error => console.log("Can't get courses. Error code: %s, URL: %s "),
                    () => console.log('DONE')
                );
    }
}