export class Course {
    constructor (
        public id: number,
        public title: string,
        public price: number,
        public instructor: string,
        public description: string,
        public categories: Array<string>) {

    }
}

export class CourseService {
    getCourses(): Array<Course> {
        return courses.map (c => new Course(c.id, c.title, c.price,  c.instructor, c.description, c.categories))
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