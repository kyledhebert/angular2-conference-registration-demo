import * as express from 'express';
import * as path from 'path';
import { Server as HttpServer } from 'http';
import { Course, Instructor, getCourses, getCourseById, getInstructorsByCourseId } from './model';

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

const httpServer: HttpServer = app.listen(8000, 'localhost', () => {
    const {address, port} = httpServer.address();
})