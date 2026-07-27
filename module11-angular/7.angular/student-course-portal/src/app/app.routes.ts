import { Routes } from '@angular/router';
import { StudentProfile } from './pages/student-profile/student-profile';
import { Home } from './pages/home/home';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form';
import { CourseDetail } from './pages/course-detail/course-detail';
import { NotFound } from './pages/not-found/not-found';
import { CoursesLayout } from './layouts/courses-layout/courses-layout';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';
import { authGuard } from './guards/auth-guard';
export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      {
        path: '',
        component: CourseListComponent
      },
      {
        path: ':id',
        component: CourseDetail
      }
    ]
  },
{
  path: 'enroll',
  loadChildren: () =>
    import('./features/enrollment/enrollment-module').then(
      m => m.EnrollmentModule
    )
},
{
  path: 'enroll-reactive',
  loadComponent: () =>
    import('./pages/reactive-enrollment-form/reactive-enrollment-form')
      .then(m => m.ReactiveEnrollmentFormComponent),
  canDeactivate: [unsavedChangesGuard]
},
{
  path: 'profile',
  canActivate: [authGuard],
  component: StudentProfile
},
  {
    path: '**',
    component: NotFound
  }

];