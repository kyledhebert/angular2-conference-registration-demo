import { Component } from '@angular/core';
import { Course, CourseService } from '../../services/course-service';

@Component({
    selector: 'registration-home-page',
    styleUrls: ['app/components/home/home.css'],
    templateUrl: 'app/components/home/home.html'
})
export class HomeComponent {
    courses: Course[] = []

    constructor(private courseService: CourseService) {
        this.courses = this.courseService.getCourses();
    }
}