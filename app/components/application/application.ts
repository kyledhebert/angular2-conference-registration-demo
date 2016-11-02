import {Component, ViewEncapsulation} from '@angular/core';
import {Course, CourseService} from '../../services/course-service'

@Component({
    selector: 'registration-application',
    templateUrl: 'app/components/application/application.html',
    styleUrls: ['app/components/application/application.css'],
    encapsulation: ViewEncapsulation.None
})

export class ApplicationComponent {
    courses: Array<Course> = [];

    constructor(private courseService: CourseService) {
        this.courses = this.courseService.getCourses();
    }
}