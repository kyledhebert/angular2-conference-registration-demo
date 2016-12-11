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

    cartCourses: CartCourse[];
    cartTotal: number = 0;

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
        }) 
    }

    getCartTotal() {
        return this.http
        .get('/total')
        .map (response => response.json());
    }

    addCartItem(course: Course) {
        // optimistically add to the view first
        let cartCourse = new CartCourse(course.id, course.title, course.price);
        this.cartCourses.push(cartCourse);

        //then update the backend
        const body = JSON.stringify(course);
        console.log(body);
        return this.http
            .post(`/cart`, body)
            .map(response => response.json());
    }

    deleteCartItem(course: CartCourse){
        return this.http
            .delete(`/cart/${course.id}`)
            .map(response => response.json());
    }
}
