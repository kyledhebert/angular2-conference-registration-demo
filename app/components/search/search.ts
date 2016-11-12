import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CourseService } from '../../services/course-service';

@Component({
    selector: 'registration-search',
    providers: [ CourseService ],
    templateUrl: 'app/components/search/search.html'
})
export class SearchComponent {
    formModel: FormGroup;
    categories: string[];

    constructor(private courseService: CourseService) {
        this.categories = this.courseService.getAllCategories();

        // defines the form model
        const fb = new FormBuilder();
        this.formModel = fb.group({
            'title': [null, Validators.minLength(3)],
            'price': [null, positiveNumberValidator],
            'category': [-1]
        })
    }

    onSearch() {
        if (this.formModel.valid) {
            console.log(this.formModel.value);
        }
    }
}

function positiveNumberValidator(control: FormControl): any {
    if (!control.value) return null;
    const price = parseInt(control.value);
    // returns null parsed value is positive or an error object
    return price === null || typeof price === 'number' && price > 0 ? null: {positivenumber: true};
}
