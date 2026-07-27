import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [

    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },

    {
      id: 2,
      name: 'Java',
      code: 'JAVA102',
      credits: 3,
      gradeStatus: 'pending'
    },

    {
      id: 3,
      name: 'Python',
      code: 'PY103',
      credits: 4,
      gradeStatus: 'passed'
    },

    {
      id: 4,
      name: 'Data Structures',
      code: 'DS104',
      credits: 4,
      gradeStatus: 'failed'
    },

    {
      id: 5,
      name: 'SQL',
      code: 'SQL105',
      credits: 2,
      gradeStatus: 'pending'
    }

  ];

  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

}