import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  isLoading = true;
searchTerm = '';
  courses: Course[] = [];

constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) {}

ngOnInit(): void {

  this.courses = this.courseService.getCourses();

  this.searchTerm =
    this.route.snapshot.queryParamMap.get('search') || '';

  this.isLoading = false;

}
searchCourses() {

  this.router.navigate(
    ['courses'],
    {
      queryParams: {
        search: this.searchTerm
      }
    }
  );

}

  trackByCourseId(index: number, course: any) {
    return course.id;
  }
  goToCourse(course: Course) {
  this.router.navigate(['courses', course.id]);
}
}