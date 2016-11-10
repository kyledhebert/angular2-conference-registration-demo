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

export class CourseService {
    getCourses(): Array<Course> {
        return courses.map (c => new Course(c.id, c.title, c.price, c.description, c.categories))
    }

    getCourseById(courseId: number) : Course {
        return courses.find(c => c.id === courseId);
    }

    getInstructorsForCourse(courseId: number) : Instructor[] {
        return instructors
            .filter(i => i.courseId === courseId)
            .map(r => new Instructor(r.id, r.courseId, r.firstName, r.lastName, r.bio))
    }
}

var courses = [
    {
        "id": 0,
        "title": "A Great Course",
        "instructor": "John Gruber",
        "price": 75.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus id illo ad fugit, odit odio velit eius incidunt dignissimos.",
        "categories": ["javascript", "angular"]
    },
    {
        "id": 1,
        "title": "A Super Course",
        "instructor": "John Gruber",
        "price": 65.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus id illo ad fugit, odit odio velit eius incidunt dignissimos.",
        "categories": ["css", "html"]
    },
    {
        "id": 2,
        "title": "An Awesome Course",
        "instructor": "John Gruber",
        "price": 95.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus id illo ad fugit, odit odio velit eius incidunt dignissimos.",
        "categories": ["javascript"]
    },
    {
        "id": 3,
        "title": "An Amazing Course",
        "instructor": "John Gruber",
        "price": 125.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus id illo ad fugit, odit odio velit eius incidunt dignissimos.",
        "categories": ["javascript", "angular", "node"]
    },
    {
        "id": 4,
        "title": "An Okay Course",
        "instructor": "John Gruber",
        "price": 45.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam error, quod ratione possimus ipsam accusamus necessitatibus, obcaecati culpa tempora doloribus id illo ad fugit, odit odio velit eius incidunt dignissimos.",
        "categories": ["javascript", "angular"]
    },

]

var instructors = [
    {
        "id": 0,
        "courseId": 0,
        "firstName": "John",
        "lastName": "Gruber",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorum quam numquam ipsum, molestiae, modi expedita laborum asperiores amet ea consectetur eos culpa nobis a libero nam dignissimos, sunt totam!"
    },
    {
        "id": 1,
        "courseId": 1,
        "firstName": "Liz",
        "secondName": "England",
        "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet minus dicta ex asperiores, modi non accusantium perferendis reiciendis. Totam earum quas, et fugit suscipit facere ipsam voluptatibus recusandae mollitia error."

    }
]