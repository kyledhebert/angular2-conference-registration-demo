# Angular 2 with Typescript Conference Registration Demo
The code in this repo demonstrates the use of [Angular 2][angular] and [Typescript][typescriptlang] to build a simple conference course registration app with a shopping cart and [Stripe checkout][stripe].

## Installing the dependencies
The application requires [node][nodejs]. If node isn't installed on your machine, visit <https://nodejs.org> and install the version for your OS.

Next run `$ npm install` from the project root to install the required packages.

## Compiling the Typescript
The typescript files in the client directory will get compiled at run time, but before you can run the app you will need to compile the code in the server folder.

To do this, run `$ npm run tsc`. This create two javascript files `registration.js` and `model.js` in the build directory.

## Running the app
To run the app, you can use another script -- `npm start` -- to run the app in production mode. To run the app in dev mode use `npm run dev`. Dev mode starts [nodemon][nodemon] to watch for changes to your source files and automatically restarts the server.

Once the app is running visit <http://localhost:8000> in your web browser to view the app.

## Stripe Checkout
The Stripe Checkout component is using the Stripe demo API key. To checkout use 4242 4242 4242 4242 as the credit card number, and future date for the expiration date, and any three digits for the validation code.	


[angular]: https://angular.io/
[nodejs]: https://nodejs.org/en/
[typescriptlang]: http://www.typescriptlang.org/
[stripe]: https://stripe.com/checkout
[nodemon]: https://nodemon.io