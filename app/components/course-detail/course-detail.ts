import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'course-detail-page',
    templateUrl: 'app/components/course-detail/course-detail.html'
    
})

export class CourseDetailComponent {
    courseTitle: string;

    constructor(route: ActivatedRoute) {
        this.courseTitle = route.snapshot.params['courseTitle'];
    }
}