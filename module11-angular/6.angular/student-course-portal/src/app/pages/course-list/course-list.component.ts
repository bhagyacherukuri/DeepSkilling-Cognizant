import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  isLoading = true;

  courses: Course[] = [];

constructor(private courseService: CourseService) {}

ngOnInit(): void {
  this.courses = this.courseService.getCourses();
}

  trackByCourseId(index: number, course: any) {
    return course.id;
  }
}