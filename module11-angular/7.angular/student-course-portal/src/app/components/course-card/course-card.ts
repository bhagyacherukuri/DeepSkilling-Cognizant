import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Highlight } from '../../directives/highlight';
import { EnrollmentService } from '../../services/enrollment';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule,Highlight,CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input()
  course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
    gradeStatus: 'passed' | 'failed' | 'pending';
  };

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded = false;
constructor(public enrollmentService: EnrollmentService) {}
  get cardClasses() {
    return {
'card--enrolled': this.enrollmentService.isEnrolled(this.course.id),
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

 toggleEnrollment() {

  if (this.enrollmentService.isEnrolled(this.course.id)) {
    this.enrollmentService.unenroll(this.course.id);
  } else {
    this.enrollmentService.enroll(this.course.id);
  }

  this.enrollRequested.emit(this.course.id);
}
}