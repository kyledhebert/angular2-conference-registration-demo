import * as express from 'express';
import * as path from 'path';
import { Server as HttpServer } from 'http';
import { Course, Instructor, getCourses, getCourseById, getInstructorsByCourseId } from './model';
import { CartCourse, getCartItems, addCartItem, deleteCartItem, getCartTotal } from './model'; 

const app = express();

// this ensures the file path is created in a cross-platform way
app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));

app.get('/courses', (request, response) => {
    response.json(getCourses(request.query));
});

app.get('/courses/:id', (request, response) => {
    response.json(getCourseById(parseInt(request.params.id)));
});

app.get('/courses/:id/instructors', (request, response) => {
    response.json(getInstructorsByCourseId(parseInt(request.params.id)));
})

app.get('/cart', (request, response) => {
    response.json(getCartItems());
})

app.get('/total', (request, response) => {
    response.json(getCartTotal());
})

app.delete('/cart/:id', (request, response) => {
    response.json(deleteCartItem(parseInt(request.params.id)));
})

app.post('/cart', (request, response) => {
    let course = new CartCourse(request.body.id, request.body.title,
        request.body.price);
    response.json(addCartItem(course));
})

const httpServer: HttpServer = app.listen(8000, 'localhost', () => {
    const {address, port} = httpServer.address();
})