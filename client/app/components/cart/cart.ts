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
    cartCourses: Observable<CartCourse[]>;

    constructor(private cartService: CartService) {
        this.cartCourses = this.cartService.getCartItems();
        console.log(this.cartCourses);
   
    }

    delete(course: CartCourse) {
        // optimistically delete the course from the view first
        console.log(this.cartCourses)
        this.cartCourses = this.cartCourses.map(
            courses => courses.splice(courses.indexOf(course),1))
        console.log(this.cartCourses)
        // then try to delete from the server
        this.cartService.deleteCartItem(course)
            .subscribe(null,
                        // if unable to delete, revert back to original view
                        error => {
                            alert("There was an error deleting this item");
                        });
    }

    updateTotal() {}
}