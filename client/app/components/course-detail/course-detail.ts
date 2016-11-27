import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, Instructor, CourseService } from '../../services/course-service';
import { CartService } from '../../services/cart-service';

@Component({
    selector: 'course-detail-page',
    templateUrl: 'app/components/course-detail/course-detail.html'
    
})

export class CourseDetailComponent {
    course: Course;
    instructors: Instructor[];

    constructor(route: ActivatedRoute, courseService: CourseService, private cartService: CartService) {
        const courseId: number = parseInt(route.snapshot.params['courseId']);

        courseService
            .getCourseById(courseId)
            .subscribe(
                course => {
                    this.course = course;
                },
                error => console.error(error));

        courseService
            .getInstructorsForCourse(courseId)
            .subscribe(
                instructors => this.instructors = instructors,
                error => console.error(error));
    }

    onAdd() {
        this.cartService.addCartItem(this.course);
    }
}