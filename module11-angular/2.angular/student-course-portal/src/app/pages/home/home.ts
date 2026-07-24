import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
 // [property] is one-way binding from Component → HTML.
  // [(ngModel)] is two-way binding between Component ↔ HTML.
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  // 👇 Add this here
  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA102',
      credits: 3
    },
    {
      id: 3,
      name: 'Spring Boot',
      code: 'SPR103',
      credits: 4
    }
  ];

  // 👇 Add this here
  selectedCourseId = 0;

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  // 👇 Add this here
  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

ngOnInit() {
  console.log('HomeComponent initialized — courses loaded');
}

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }
}