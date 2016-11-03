import {Component, Input} from '@angular/core';
import {Course} from '../../services/course-service';

@Component({
    selector: 'registration-course-listing',
    styleUrls: ['app/components/course-listing/course-listing.css'],
    templateUrl: 'app/components/course-listing/course-listing.html',
})

export class CourseListingComponent {
    @Input() course: Course;
}
