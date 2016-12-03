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
    cartTotal: number;

    constructor(private cartService: CartService) {
        this.cartTotal = this.cartService.getCartTotal()
        this.cartService.getCartItems()
            .subscribe(
                (cartCourses: CartCourse[]) => {
                    this.cartCourses = cartCourses;
                });
    }
    
    onDelete(course: CartCourse) {
        this.cartService.deleteCartItem(course);
            // .subscribe();
    }

    checkout() {
        let handler = (<any>window).StripeCheckout.configure({
            // this is a publishable demo key
            key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
            locale: 'auto',
        });

        handler.open({
            name: 'View Source',
            description: 'Your Courses',
            amount: this.cartTotal + '00'
        });
    }

}