import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';

import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { Notification } from '../../components/notification/notification';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard,
    CourseSummaryWidget,
    Notification
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  courseCount = 0;

  courses: Course[] = [];

  selectedCourseId = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
    this.courseCount = this.courses.length;

    console.log(this.courses);
    console.log('HomeComponent initialized — courses loaded');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

  addNewCourse(): void {
    this.courseService.addCourse({
      id: 6,
      name: 'React',
      code: 'RCT106',
      credits: 3,
      gradeStatus: 'pending'
    });

    this.courses = this.courseService.getCourses();
    this.courseCount = this.courses.length;
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}