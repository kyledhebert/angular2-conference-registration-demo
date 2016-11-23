import { EventEmitter, Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

    constructor(private http: Http) {};

    getCartItems(): Observable<CartCourse[]> {
        return this.http
        .get('/cart')
        .map(response => response.json());
    }

    addCartItem(course: Course){
        let cartCourse = new CartCourse(course.id, course.title, course.price);
        this.getCartItems().push(cartCourse);
    }

    deleteCartItem(cartCourse: CartCourse){
        return this.http
            .delete(`/cart/${cartCourse.id}`)
            .map(response => response.json());
    }


    getCartTotal(){}
}
