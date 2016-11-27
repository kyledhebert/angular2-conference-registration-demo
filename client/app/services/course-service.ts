import { EventEmitter, Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class Course {
    constructor (
        public id: number,
        public title: string,
        public price: number,
        public description: string,
        public categories: Array<string>) {
    }
}

export class Instructor {
    constructor(
        public id: number,
        public courseId: number,
        public firstName: string,
        public lastName: string,
        public bio:string) {        
    }
}

export interface CourseSearchParams {
    title: string;
    minPrice: number;
    maxPrice: number;
}

@Injectable()
export class CourseService {
    searchEvent: EventEmitter = new EventEmitter();

    constructor(private http: Http) {}

    search(params: CourseSearchParams) : Observable<Course[]> {
        return this.http
            .get('/courses', {search: encodeParams(params)})
            .map(response => response.json());
    }

    getCourses(): Observable<Course[]> {
        return this.http.get('/courses')
        .map(response => response.json());
    }

    getCourseById(courseId: number) : Observable<Course> {
        return this.http.get(`/courses/${courseId}`)
            .map(response => response.json());
    }

    getInstructorsForCourse(courseId: number) : Observable<Instructor[]> {
        return this.http
            .get(`/courses/${courseId}/instructors`)
            .map(response => response.json())
            .map(instructors => instructors.map(
                (i: any) => new Instructor(i.id, i.courseId, i.firstName, i.lastName, i.bio)));
    }

    getAllCategories(): string[] {
        return ['Angular', 'React', 'TypeScript', 'JavaScript', 'Node']
    }
}

// Turns a JavaScript object into an instance of URLSearchParams
function encodeParams(params: any): URLSearchParams {
    return Object.keys(params)
        .filter(key => params[key])
        .reduce((searchParams: URLSearchParams, key: string) => {
            searchParams.append(key, params[key]);
            return searchParams;
        },
        new URLSearchParams());
}



