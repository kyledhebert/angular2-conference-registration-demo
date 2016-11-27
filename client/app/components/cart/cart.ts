import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { CartCourse, CartService } from '../../services/cart-service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'registration-cart',
    templateUrl: 'app/components/cart/cart.html'
})
export class CartComponent {
    cartCourses: CartCourse[];

    constructor(private cartService: CartService) {
        this.cartService.getCartItems()
            .subscribe(
                (cartCourses: CartCourse[]) => {
                    this.cartCourses = cartCourses;
                });
    }

    delete(course: CartCourse) {
        this.cartService.deleteCartItem(course)
            .subscribe();

    }

    updateTotal() {}
}