import { EventEmitter, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';

import { Course } from './course-service';


export class CartCourse {
    constructor(
        public id: number,
        public title: string,
        public price: number) {}
}

@Injectable()
export class CartService {

    private cartCourses: CartCourse[] = []

    constructor(private http: Http) {};

    getCartItems() {
        return this.http
        .get('/cart')
        .map(response => {
            const cartCourses = response.json();
            // transform the Observable to an Array
            let transformedCartCourses: CartCourse[] =[];
            for (let cartCourse of cartCourses) {
                transformedCartCourses.push(new CartCourse(cartCourse.id, cartCourse.title, cartCourse.price));
            }
            this.cartCourses = transformedCartCourses;
            return transformedCartCourses;
        } 
    }

    addCartItem(course: Course) {
        this.http
        .get(`/cart/${course.id}`)
        .map(response => response.json)
    }

    deleteCartItem(course: CartCourse){
        // optimistically delete from the view first
        const index = this.cartCourses.indexOf(course);
        this.cartCourses.splice(index, 1)
        // then delete on backend
        return this.http
            .delete(`/cart/${course.id}`)
            .map(response => response.json());
    }


    getCartTotal(){}
}
