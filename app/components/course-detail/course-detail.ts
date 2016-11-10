import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, Instructor, CourseService } from '../../services/course-service'

@Component({
    selector: 'course-detail-page',
    templateUrl: 'app/components/course-detail/course-detail.html'
    
})

export class CourseDetailComponent {
    course: Course;
    instructors: Instructor[];

    constructor(route: ActivatedRoute, courseService: CourseService) {
        let courseId: number = parseInt(route.snapshot.params['courseId']);
        this.course = courseService.getCourseById(courseId);
        this.instructors = courseService.getInstructorsForCourse(this.course.id);
    }
}