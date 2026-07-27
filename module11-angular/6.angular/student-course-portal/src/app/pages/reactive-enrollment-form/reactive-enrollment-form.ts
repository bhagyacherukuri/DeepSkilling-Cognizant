import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormControl
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
templateUrl: './reactive-enrollment-form.html',
styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentFormComponent {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      studentEmail: this.fb.control(
        '',
        [
          Validators.required,
          Validators.email
        ],
        [
          this.simulateEmailCheck
        ]
      ),

      courseId: [
        '',
        [
          Validators.required,
          this.noCourseCode
        ]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])
    });

  }
    onSubmit() {
  console.log("Submit button clicked");
  console.log(this.enrollForm.value);
  console.log(this.enrollForm.getRawValue());

  alert("Form Submitted Successfully!");
}

  //---------------------------------------------
  // Custom Validator
  //---------------------------------------------

  noCourseCode(control: AbstractControl): ValidationErrors | null {

  const value = control.value?.toUpperCase();

  if (value && value.startsWith('XX')) {
    return { noCourseCode: true };
  }

  return null;
}

  //---------------------------------------------
  // Async Validator
  //---------------------------------------------

  simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {

    return new Promise(resolve => {

      setTimeout(() => {

        if (control.value && control.value.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }

      }, 800);

    });

  }

  //---------------------------------------------
  // Getter
  //---------------------------------------------

  get additionalCourses(): FormArray<FormControl> {
  return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;
}

  //---------------------------------------------
  // Add Course
  //---------------------------------------------

 addCourse() {
  this.additionalCourses.push(
    new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  );
}

  //---------------------------------------------
  // Remove Course
  //---------------------------------------------

  removeCourse(index: number) {

    this.additionalCourses.removeAt(index);

  }

  //---------------------------------------------
  // Submit
  //---------------------------------------------

 
  

}